var mongoose = require('mongoose');
Character = mongoose.model('Character');

exports.findAll = function(req, res) {
    Character.find({}, function(err, results) {
	return res.send(results);
    });
}

exports.findById = function(req, res) {
    var id = req.params.id;
    Character.find({'_id:':id}, function(err, result) {
	return res.send(result);
    });
}

exports.add = function(req, res) {
    Character.create(req.body, function(err) {
	if (err) {
	    return console.log(err);
	}
	return res.sendStatus(202);
    });
}

exports.update = function(req, res) {
    var id = req.params.id;
    
    Character.update({'_id':id}, req.body, function(err, numberAffected) {
	if (err) {
	    return console.log(err);
	}
	console.log('Updated %d records', numberAffected);
	return res.sendStatus(202);
    })
}

exports.delete = function(req, res) {
    var id = req.params.id;
    console.log(id);
    Character.remove({'_id':id}, function(result) {
	return res.send(result);
    });
}

exports.import = function(req, res) {
    var priest = {name: 'Ucchan', class: 'Priest', level: 80};
    Character.create(priest, function(err, result) {
	if (err) {
	    return console.log(err);
	}
	return res.send(result);
    });
}