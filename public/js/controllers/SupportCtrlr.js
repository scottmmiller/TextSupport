var app = angular.module('textSupport');

app.controller('SupportCtrlr', function($scope, textService, $firebase) {

	$scope.test = 'This is the SupportCtrlr';

	var ticketInfo = $firebase(new Firebase('https://textsupport99.firebaseio.com/numbers'))

	$scope.tickets = ticketInfo.$asArray();
	console.log($scope.tickets)
});