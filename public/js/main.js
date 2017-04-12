var app = angular.module('handbook', [
  'nya.bootstrap.select', 'ngSanitize', 'xeditable', 'angular.filter', 'btford.socket-io'
]);

// Helper filter to remove spaces (used in ids and hrefs)
app.filter('spaceless',function() {
  return function(input) {
    if (input) {
        return input.replace(/[\s)()']+/g, '-'); // added some other characters (since this is used for generating href and scrollspy)
    }
  }
});

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

// Configure 'xeditable' for in-place editing
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.factory('socket', function (socketFactory) {
  return socketFactory();
});

// app.factory('socket', function ($rootScope) {
//   var socket = io.connect();
//   return {
//     on: function (eventName, callback) {
//       socket.on(eventName, function () {  
//         var args = arguments;
//         $rootScope.$apply(function () {
//           callback.apply(socket, args);
//         });
//       });
//     },
//     emit: function (eventName, data, callback) {
//       socket.emit(eventName, data, function () {
//         var args = arguments;
//         $rootScope.$apply(function () {
//           if (callback) {
//             callback.apply(socket, args);
//           }
//         });
//       })
//     }
//   };
// });

app.controller('HandbookCtrl', ['$scope', '$sce', '$http', 'socket', function ($scope,$sce,$http,socket) {

  socket.on('socket:error', function (ev, data) {
    console.log(ev, data);
  });
  socket.on('newContent', function (ev, data) {
    $scope.contentList = ev;
  });

  // Get data for views from server
  $http({
    method: 'GET',
    url: 'getPortfolioData'
    }).then(function successCallback(response) {
      $scope.portfolios = response.data.portfolios;
      $scope.products = response.data.products;
      // product-handbook map
      $scope.handbookmap = response.data.products.reduce(function(accumulator, product, currentIndex, array){
        accumulator[product.name] = product.hbu;
        return accumulator;
      });
      console.log($scope.handbookmap);
    }, function errorCallback(response) {
      console.log(response);
  });

  $http({
    method: 'GET',
    url: 'getContentData'
    }).then(function successCallback(response) {
      $scope.contentList = response.data;
      // list of handbooks
      $scope.handbooks = Object.keys(response.data).map(function(key){
        return key;
      });
    }, function errorCallback(response) {
      console.log(response);
  });

  // Initialize data
  $scope.init = function() {
    $scope.displayedProducts = "";
    $scope.content = "";
    $scope.handbooks = [];
    $scope.selectedPortfolio = "";
    $scope.selectedProduct = "";
    $scope.selectedHandbook = "";
    $scope.handbookmap = {};
  };

  // Update data (send to server for saving)
  $scope.updateContentData = function(data) {
    return $http.post('editContentData', $scope.contentList);
  };

  // Other/Utility
  $scope.clearDropdowns = function() {
    $scope.selectedPortfolio = "";
    $scope.selectedProduct = "";
    $scope.selectedHandbook = "";
  };

  $scope.isEmpty = function (obj) {
    return !!obj
  };

  $scope.selectProduct = function(selectedProduct) {
    $scope.selectedPortfolio = selectedProduct.portfolio;
    $scope.selectedHandbook = $scope.handbookmap[selectedProduct.name];
    console.log($scope.selectedHandbook, selectedProduct);
  };

  $scope.selectHandbook = function(selectedHandbook) {
    $scope.selectedHandbook = selectedHandbook;
    $scope.selectedProduct = "";
    console.log(selectedHandbook);
  };

  $scope.addSection = function(sectionKey, handbookKey){
    console.log(sectionKey, handbookKey);
    $scope.contentList[handbookKey] = $scope.objectInsertBeforeKey($scope.contentList[handbookKey], 'newSection', {
      content: "",
      subsections: {}
    }, sectionKey);
    $scope.updateContentData();
  };

  $scope.addEndSection = function(handbookKey){
    var keys = Object.keys($scope.contentList[handbookKey]);
    if(keys.length > 0){
        var sectionKey = keys[keys.length - 1];
         $scope.contentList[handbookKey] = $scope.objectInsertAfterKey($scope.contentList[handbookKey], 'newSection', {
          content: "",
          subsections: {}
        }, sectionKey);
    } else {
      $scope.contentList[handbookKey]['newSection'] = {
        content: "",
        subsections: {}
      };
    }
    $scope.updateContentData();
  };

  $scope.deleteSection = function(sectionKey, handbookKey){
    var r = confirm("Are you sure you want to delete this entire section?");
    if (r == true) {
      delete $scope.contentList[handbookKey][sectionKey];
      $scope.updateContentData();
    }
  };

  $scope.addSubsection = function(subsectionKey, handbookKey, sectionKey){
    console.log(subsectionKey, handbookKey, sectionKey);
    if(!subsectionKey){
      console.log(Object.keys($scope.contentList[handbookKey][sectionKey].subsections)[0]);
      subsectionKey = Object.keys($scope.contentList[handbookKey][sectionKey].subsections)[0];
      if(subsectionKey === undefined){
        $scope.contentList[handbookKey][sectionKey].subsections['newSubsection'] = { content: "" };
      } else {
        $scope.contentList[handbookKey][sectionKey].subsections = $scope.objectInsertBeforeKey($scope.contentList[handbookKey][sectionKey].subsections, 'newSubsection', { content: "" }, subsectionKey);
      }
    } else {
      $scope.contentList[handbookKey][sectionKey].subsections = $scope.objectInsertAfterKey($scope.contentList[handbookKey][sectionKey].subsections, 'newSubsection', { content: "" }, subsectionKey);
    }
    $scope.updateContentData();
  };

  $scope.deleteSubsection = function(subsectionKey, sectionKey, handbookKey){
    var r = confirm("Are you sure you want to delete this subsection?");
    if (r == true) {
      delete $scope.contentList[handbookKey][sectionKey].subsections[subsectionKey];
      $scope.updateContentData();
    }
  };

  $scope.changeSectionName = function(newKey, oldKey, handbook){
    var hb = $scope.contentList[handbook];
    $scope.contentList[handbook] = $scope.objectInsertBeforeKey(hb, newKey, hb[oldKey], oldKey);
    delete $scope.contentList[handbook][oldKey];
    $scope.updateContentData();
  };

  $scope.changeSubsectionName = function(newKey, oldKey, handbook, sectionKey){
    console.log(newKey, oldKey, handbook, sectionKey);
    var parent = $scope.contentList[handbook][sectionKey].subsections;
    $scope.contentList[handbook][sectionKey].subsections = $scope.objectInsertBeforeKey(parent, newKey, parent[oldKey], oldKey);
    delete $scope.contentList[handbook][sectionKey].subsections[oldKey];
    console.log(Object.keys($scope.contentList[handbook][sectionKey].subsections));
    $scope.updateContentData();
  };

  $scope.objectInsertBeforeKey = function(object, newKey, newVal, insertAfterkey){
    newObject={};
    $.map(object, function(value, key) {    
      if(key == insertAfterkey){
        newObject[newKey] = newVal;
        newObject[key] = value;
      } else {
        newObject[key] = value;
      }
    });
    return newObject;
  };

  $scope.objectInsertAfterKey = function(object, newKey, newVal, insertAfterkey){
    newObject={};
    $.map(object, function(value, key) {    
      if(key == insertAfterkey){
        newObject[key] = value;
        newObject[newKey] = newVal;
      } else {
        newObject[key] = value;
      }
    });
    return newObject;
  };

   // Add placeholder to bs-searchbox (3rd party doesn't allow a way to do this in config)
   $('#select-product .nya-bs-select .bs-searchbox .form-control').attr("placeholder", "Enter product name to search");

}]);
