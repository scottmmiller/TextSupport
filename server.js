var express = require('express');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var twilio = require('twilio')('AC6a61f1cbd8cb8617be0623f63051562c', 'e19eca95088d75ea063a30497d3386e8');
var moment = require('moment');

var app = express();
var port = 9999;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var firebaseRef = new Firebase('https://textsupport99.firebaseio.com/numbers');

// app.get('/support', function(req, res) {
// 	res.json(firebaseRef.data);
// })

app.post('/api/support/messages', function(req, res) {
	console.log(req.body);
	var reply = {
		to: req.body.to,
		from: '8019809991',
		body: req.body.message,
		date_sent: moment().format('ddd, D MMM YYYY HH:mm:ss ZZ'),
		status: 'sent',
		is_support: true
	};
	twilio.sendMessage(reply, function(error, data) {
		if(!error) {
			firebaseRef.child('/' + req.body.to).push(reply);
			res.status(200).end();
		}
		else {
			console.log(error);
			res.status(400).end(error);
		}
	})
});

app.get('/support/resources/:resouce_name', function(req, res) {
	

});


app.listen(port, function() {
	console.log('listening on port ' + port);
});