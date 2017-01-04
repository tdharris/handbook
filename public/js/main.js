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
    }, function errorCallback(response) {
      console.log(response);
  });

  $http({
    method: 'GET',
    url: 'getContentData'
    }).then(function successCallback(response) {
      $scope.contentList = response.data;
    }, function errorCallback(response) {
      console.log(response);
  });

  // Initialize data
  $scope.init = function() {
    $scope.displayedProducts = "";
    $scope.content = "";
    $scope.selectedPortfolio = "";
    $scope.selectedProduct = "";
  };

  // Update data (send to server for saving)
  $scope.updateContentData = function(data) {
    return $http.post('editContentData', $scope.contentList);
  };

  // Other/Utility
  $scope.clearDropdowns = function() {
    $scope.selectedPortfolio = "";
    $scope.selectedProduct = "";
  };

  $scope.isEmpty = function (obj) {
    return !!obj
  };

  $scope.updatePortfolio = function(selectedProduct) {
    $scope.selectedPortfolio = selectedProduct.portfolio;
    console.log(selectedProduct);
  };

   // Add placeholder to bs-searchbox (3rd party doesn't allow a way to do this in config)
   $('#select-product .nya-bs-select .bs-searchbox .form-control').attr("placeholder", "Enter product name to search");

}]);
