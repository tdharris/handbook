var myApp = angular.module('handbook', ['nya.bootstrap.select', 'ngSanitize', 'xeditable', 'angular.filter']);

myApp.controller('HandbookCtrl', ['$scope', '$sce', '$http', function ($scope,$sce,$http) {

  // Get data for views from server
  $http({
    method: 'GET',
    url: '/getPortfolioData'
    }).then(function successCallback(response) {
      $scope.portfolios = response.data.portfolios;
      $scope.products = response.data.products;
      console.log(response);
      // $scope.products = $scope.sortObj($scope.products, 'portfolio');
      console.log($scope.products);
    }, function errorCallback(response) {
      console.log(response);
  });

  $http({
    method: 'GET',
    url: '/getContentData'
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

  $scope.updatePortfolio = function(selectedProduct) {
    $scope.selectedPortfolio = selectedProduct.portfolio;
    console.log(selectedProduct);
  };

  /**
   * Sorts an array of json objects by some common property, or sub-property.
   * @param {array} objArray
   * @param {array|string} prop Dot-delimited string or array of (sub)properties
   */


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