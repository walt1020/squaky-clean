const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  position: {type: String, required: true},
  emailAddress: { type: String, required: true, unique: true},
  car: {
  	make: {type: String, required:true},
  	model: {type: String, required:true},
  	color: {type: String, required:true},
  	year_made: {type: String, required: true},
  	License_plate: {type: String, required: true}

  },
  home_address: {type: String, required:true},
  technician: {type: Boolean, default:false},
  product_selected: {type: String}
  special_instructions: {type: String, required:true}
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;