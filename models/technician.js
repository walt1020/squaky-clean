const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const technicianSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: {type: String, required: true},
  description: {type: String, required: true},
});

const Technician = mongoose.model("Technician", technicianSchema);

module.exports = Technician;