var myApp = angular.module('handbook', ['nya.bootstrap.select', 'ngSanitize', 'xeditable']);

myApp.controller('HandbookCtrl', ['$scope', '$sce', '$http', function ($scope,$sce,$http) {

  // Get data for views from server
  $http({
    method: 'GET',
    url: '/getPortfolioData'
    }).then(function successCallback(response) {
      $scope.portfolios = response.data;
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
  });

  $http({
    method: 'GET',
    url: '/getContentData'
    }).then(function successCallback(response) {
      $scope.contentList = response.data;
      console.log(response);
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
  $scope.updateContentData = function() {
    return $http.post('/editContentData', $scope.contentList);
  };

  // Other/Utility
  $scope.clearDropdowns = function() {
    $scope.selectedPortfolio = "";
    $scope.selectedProduct = "";
  };

  $scope.isEmpty = function (obj) {
    return !!obj
  };

}]);

// Helper filter to remove spaces (used in ids and hrefs)
myApp.filter('spaceless',function() {
  return function(input) {
    if (input) {
        return input.replace(/\s+/g, '-');
    }
  }
});

// Configure 'xeditable' for in-place editing
myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});