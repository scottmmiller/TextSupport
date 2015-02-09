var express = require('express');
var bodyParser = require('body-parser');
var firebase = require('firebase');
var twilio = require('twilio');

var app = express();
var port = 9999;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));



app.listen(port, function() {
	console.log('listening on port ' + port);
});