const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: {type: String, required: true},
  emailAddress: { type: String, required: true, unique: true},
  home_address: {type: String, required:true}
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;