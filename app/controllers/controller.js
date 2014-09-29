'use strict';

angular.module('myApp.controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    //templateUrl: '/view1.html',
    controller: 'Ctrl'
  });
}])

.controller('Ctrl', function($scope, $http) {
	$http.get('models/restaurants.json').success(function(data) {
    $scope.restaurants = data;
  });
	

	$scope.orderProp = 'votes';
});