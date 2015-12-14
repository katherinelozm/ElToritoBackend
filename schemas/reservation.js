var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  name : {type: String, required: true},
  company : {type: String, required: false},
  email : {type: String, unique: true, required: true},
  quantity : {type: int, required: true},
  day : {type: Date, required: true},
  hour : {type: Date, required: true},
  eventType : {type: String, required: true},
  locality : {type: String, required: true},
  comments : {type: String, required: true},

});

module.exports = mongoose.model('Reservation', ReservationSchema);
