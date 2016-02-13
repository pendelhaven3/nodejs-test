var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
    name: String,
    class: String,
    level: String
});

mongoose.model('Character', CharacterSchema);