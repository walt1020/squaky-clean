// const Customer = require("mongoose").model("Customer");

const Customer = require("../models/customer");



module.exports = {
	findAll: function(req, res) {
		 Customer.find({})
		.sort({"name": 1})
		.then(dbModal => res.json(dbModal))
		.catch(err => res.status(422).json(err))
	},

	findById: function(res, res) {
		 Customer.findById(req.params.id)
		.then(dbModal => res.JSON(dbModal))
		.catch(err => res.status(422).json(err))
	},


	createCustomer: function(req, res) {
		 Customer.create(req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	updateCustomer: function(req, res) {
		 Customer.findOneAndUpdate({_id: req.params.id}, req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	deleteCustomer: function (req, res) {
		 Customer.findById(req.params.id)
		.then(dbModel => dbModel.remove())
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	}
}