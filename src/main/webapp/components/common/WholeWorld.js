var app = angular.module('wholeWorldApp', [ 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute','ui.select' ]);

app.controller('wholeWorldCtrl', [ '$scope', '$location', function($scope, $location) {

	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};

	$scope.menus = [ "Dropdown", "Radio", "Button", "Text field", "Header/Footer", "Date field", "Checkboxes", "Time widget", "Expand", "Data Tables" ];


} ]);

app.controller('DropdownCtrl', [ '$scope', 'header', function($scope, header, people) {
	$scope.header = header;
	$scope.data={};
	$scope.selectedItem = 'Please Select';
	 $scope.status = {
			    isopen: false
			  };
	 $scope.dropboxitemselected = function (item) {
	        $scope.selectedItem = item;
	    }
	 
	 $scope.data.peopleDropdownFilter = 'Nicolas';
	 
	$scope.people = [ {
		name : 'Adam',
		email : 'adam@email.com',
		age : 12,
		country : 'United States'
	}, {
		name : 'Amalie',
		email : 'amalie@email.com',
		age : 12,
		country : 'Argentina'
	}, {
		name : 'Estefania',
		email : 'estefania@email.com',
		age : 21,
		country : 'Argentina'
	}, {
		name : 'Adrian',
		email : 'adrian@email.com',
		age : 21,
		country : 'Ecuador'
	}, {
		name : 'Wladimir',
		email : 'wladimir@email.com',
		age : 30,
		country : 'Ecuador'
	}, {
		name : 'Nicolas',
		email : 'nicole@email.com',
		age : 43,
		country : 'Colombia'
	} ];

} ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/Dropdown', {
		templateUrl : 'Dropdown.html',
		controller : 'DropdownCtrl',
		resolve : {
			header : function() {
				return 'Dropdown Demo';
			}
		}
	}), $routeProvider.when('/Radio', {
		template : 'Radio appears',

	}), $routeProvider.otherwise({
		redirectTo : "/"
	});
} ]);