var express = require('express');
var bodyParser = require('body-parser');
var firebase = require('firebase');
var twilio = require('twilio');

var app = express();
var port = 9999;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// var firebaseRef = new Firebase('https://textsupport99.firebaseio.com/numbers');

// app.get('/support', function(req, res) {
// 	res.json(firebaseRef.data);
// })

app.post('/api/support/messages', function(req, res) {

})


app.listen(port, function() {
	console.log('listening on port ' + port);
});