var mongoClient = require('mongodb').MongoClient;

/*
// Connect to the db
mongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
*/

mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

require('./models/character.js')
require('./routes')(app);

app.listen(8081);
console.log('App running');