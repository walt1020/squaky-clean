const router = require("express").Router();

const technicianController = require("../Controllers/technicianController");


router.route("/technicians")
	.get(technicianController.findAll)
	.post(technicianController.createCustomer);



router.route("/technician/:id")
	.get(technicianController.findById)
	.put(technicianController.updateCustomer)
	.update(technicianController.deleteCustomer);