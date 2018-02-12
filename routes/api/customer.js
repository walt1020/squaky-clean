const router = require("express").Router();

const customerController = require("../Controllers/customerController");


router.route("/customers")
	.get(customerController.findAll)
	.post(customerController.createCustomer);



router.route("/customer/:id")
	.get(customerController.findById)
	.put(customerController.updateCustomer)
	.update(customerController.deleteCustomer);