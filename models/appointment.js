const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
car: {

  	make: {type: String, required:true},
  	model: {type: String, required:true},
  	color: {type: String, required:true},
  	year_made: {type: String, required: true}
  	License_plate: {type: String, required: true}
  },

location: {type: String, required: true},
time: {type: Date, required: true},
special_instructions: {type: String, required:true}

});

const Appointment = mongoose.model("Customer", appointmentSchema);

module.exports = Appointment;