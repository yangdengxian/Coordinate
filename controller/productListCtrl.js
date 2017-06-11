angular.module('sportStoreApp')
	.constant('prouductListActiveClass', 'btn-primary')
	.constant('pageCount', 3)
	.controller('productListCtrl', ['$scope','$filter','prouductListActiveClass','pageCount',function ($scope,$filter,prouductListActiveClass,pageCount) {
		var selectedCategory = null;

		$scope.selectedPage = 1;
		$scope.pageSize = pageCount;

		$scope.selectCategory = function(newCategory) {
			selectedCategory = newCategory;
			$scope.selectedPage = 1;
		};

		$scope.selectPage = function(newPage) {
			$scope.selectedPage = newPage;
		};

		$scope.categoryFilterFn = function(product) {
			return selectedCategory == null ||
				product["Type"] == selectedCategory;
		};

		$scope.getCategoryClass = function(category) {
			return selectedCategory == category ? prouductListActiveClass : '';
		};

		$scope.getSelectedPageClass = function(page) {
			return $scope.selectedPage == page ? prouductListActiveClass : '';
		};
	}]);