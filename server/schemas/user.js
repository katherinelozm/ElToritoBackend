var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  name : {type: String, required: true},
  email : {type: String, unique: true, required: true},
  number : {type: String, required: true},
  password : {type: String, required: true},
  scope : [String]
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
