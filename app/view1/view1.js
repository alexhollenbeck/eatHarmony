'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
	$scope.restaurants = [
	    {'name': 'Rollin To Go',
	     'style': 'Sandwiches',
	 	 'votes': -4},
	    {'name': 'Tomate',
	     'style': 'Mexican',
	 	 'votes': -3},
	    {'name': 'DnDs',
	     'style': 'Burgers',
	 	 'votes': -1},
	    {'name': 'Joy Yees',
	     'style': 'Asian',
	 	 'votes': -2},
	    {'name': 'BAT 17',
	     'style': 'Sandwiches',
	 	 'votes': -4},
	    {'name': 'Edzos',
	     'style': 'Burgers',
	 	 'votes': -3},
	    {'name': 'Cozy',
	     'style': 'Asian',
		 'votes': -2},
	    {'name': 'Portillos',
	     'style': 'Burgers',
	 	 'votes': -0},
	    {'name': 'Mandarin House',
	     'style': 'Chinese',
	 	 'votes': -1},
	    {'name': 'Lisas',
	     'style': 'Sandwiches',
		 'votes': -0},
	  ];
	

	$scope.orderProp = 'votes';
});