var app = angular.module('textSupport', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrlr',
			resolve: {

			}
		}).when('/support', {
			templateUrl: 'views/support.html',
			controller: 'SupportCtrlr',
			resolve: {

			}
		}).otherwise('/');

});

