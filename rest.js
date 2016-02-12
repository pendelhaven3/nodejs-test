var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/user', function(req, res) {
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	res.json(data);
    });
});

app.get('/user/:name', function(req, res) {
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	data = JSON.parse(data);
	res.json(data[req.params.name]);
    });
});

app.post('/user', function(req, res) {
    var newUser = req.body;
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	data = JSON.parse(data);
	data[newUser.name] = newUser;
	fs.writeFile(__dirname + '/database.json', JSON.stringify(data), function(err) {
	   if (err) {
	       return console.log(err);
	   } 
	});
	res.status(200).end();
    });
});

app.delete('/user/:name', function(req, res) {
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	data = JSON.parse(data);
	delete data[req.params.name];
	fs.writeFile(__dirname + '/database.json', JSON.stringify(data), function(err) {
	   if (err) {
	       return console.log(err);
	   } 
	});
	res.status(200).end();
    });
});

var server = app.listen(8081, function() {
    console.log('App running');
});
