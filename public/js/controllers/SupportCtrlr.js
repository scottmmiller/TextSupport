var app = angular.module('textSupport');

app.controller('SupportCtrlr', function($scope, textService, $firebase) {

	$scope.test = 'This is the SupportCtrlr';

	var ticketInfo = $firebase(new Firebase('https://textsupport99.firebaseio.com/numbers'))

	$scope.tickets = ticketInfo.$asObject();
	console.log($scope.tickets);

	$scope.sendResponse = function(replyText, number) {
		console.log(replyText)
		textService.sendResponse(replyText, number).then(function(res) {
			
		}, function(err) {
			console.log('Error with sendResponse', err)
		});

	}
});