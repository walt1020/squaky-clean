const router = require("express").Router();

const appointmentController = require("../Controllers/appointmentController");


router.route("/appointments")
	.get(appointmentController.findAll)
	.post(appointmentController.createCustomer);



router.route("/appointment/:id")
	.get(appointmentController.findById)
	.put(appointmentController.updateCustomer)
	.update(appointmentController.deleteCustomer);