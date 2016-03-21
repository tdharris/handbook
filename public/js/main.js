var myApp = angular.module('handbook', ['nya.bootstrap.select', 'ngSanitize', 'angular.filter']);

myApp.controller('HandbookCtrl', ['$scope', '$sce', '$http', function ($scope,$sce,$http) {

  // Get data for views from server
  $http({
    method: 'GET',
    url: '/getPortfolioData'
    }).then(function successCallback(response) {
      $scope.portfolios = response.data.portfolios;
      $scope.products = response.data.products;
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

   // Add placeholder to bs-searchbox (3rd party doesn't allow a way to do this in config)
   $('#select-product .nya-bs-select .bs-searchbox .form-control').attr("placeholder", "Enter product name to search");

}]);

// Helper filter to remove spaces (used in ids and hrefs)
myApp.filter('spaceless',function() {
  return function(input) {
    if (input) {
        return input.replace(/[\s)()']+/g, '-'); // added some other characters (since this is used for generating href and scrollspy)
    }
  }
});

myApp.filter('unsafe', function($sce) { return $sce.trustAsHtml; });