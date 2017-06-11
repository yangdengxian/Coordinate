var sportStoreApp = angular.module('sportStoreApp');
sportStoreApp.constant('dataUrl', 'http://localhost:2403/wkid/')
sportStoreApp.controller('sportStoreCtrl', ['$scope','$http','dataUrl', function ($scope,$http,dataUrl) {
	$scope.data = {};
	$http.get(dataUrl)
		.success(function(data){
			$scope.data.products = data;
		})
		.error(function(error){
			$scope.data.error = error;
		});
}])