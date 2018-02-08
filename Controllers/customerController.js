const db = require("../models");


module.exports = {
	findAll: function(req, res) {
		db.Customer.find(req.query)
		.sort(1)
		.then(dbModal => res.JSON(dbModal))
		.catch(err => res.status(422).json(err))
	},

	findById: function(res, res) {
		db.Customer.findById(req.params.id)
		.then(dbModal => res.JSON(dbModal))
		.catch(err => res.status(422).json(err))
	},


	createCustomer: function(req, res) {
		db.Customer.create(req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	updateCustomer: function(req, res) {
		db.Customer.findOneAndUpdate({_id: req.params.id}, req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	deleteCustomer: function (req, res) {
		db.Technician.findById(req.params.id)
		.then(dbModel => dbModel.remove())
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	}
}