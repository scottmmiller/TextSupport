var app = angular.module('textSupport');

app.service('textService', function($http, $q) {

	// this.getTickets = function() {
	// 	var deferred = $q.defer();
	// 	$http({
	// 		method: "GET",
	// 		url: 
	// 	}).then(function(results) {
	// 		deferred.resolve(results.data)
	// 	}).then(function(error) {
	// 		deferred.reject(error)
	// 	});
	// }

	this.sendResponse = function(replyText, number) {
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/support/messages', 
			data: {
				to: number,
				message: replyText
			}
		})
		return deferred.promise;
	}
});