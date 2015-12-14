var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
  name : {type: String, required: true},
  company : {type: String, required: false},
  email : {type: String, unique: true, required: true},
  quantity : {type: int, required: true},
  eventType : {type: String, required: true}
});

module.exports = mongoose.model('Quote', QuoteSchema);
