var fs = require('fs');

exports.findAll = function(req, res) {
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	res.send(data);
    });
}

exports.findById = function(req, res) {
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	data = JSON.parse(data);
	res.send(data[req.params.name]);
    });
}

exports.add = function(req, res) {
    var newUser = req.body;
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	data = JSON.parse(data);
	data[newUser.name] = newUser;
	fs.writeFile(__dirname + '/database.json', JSON.stringify(data), function(err) {
	   if (err) {
	       return console.log(err);
	   } 
	});
	res.status(200).send();
    });
}

exports.update = function(req, res) {
    var newUser = req.body;
    fs.readFile(__dirname + '/database.json', 'utf8', function(err, data) {
	data = JSON.parse(data);
	data[req.params.name] = newUser;
	fs.writeFile(__dirname + '/database.json', JSON.stringify(data), function(err) {
	   if (err) {
	       return console.log(err);
	   } 
	});
	res.status(200).send();
    });
}

exports.delete = function(req, res) {
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
}