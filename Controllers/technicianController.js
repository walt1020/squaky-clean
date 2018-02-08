const db = require("../technician");


module.exports = {
	findAll: function(req, res) {
		db.Technician.find(req.query)
		.sort(1)
		.then(dbModal => res.JSON(dbModal))
		.catch(err => res.status(422).json(err))
	},

	findById: function(res, res) {
		db.Technician.findById(req.params.id)
		.then(dbModal => res.JSON(dbModal))
		.catch(err => res.status(422).json(err))
	},


	createTechnician: function(req, res) {
		db.Technician.create(req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	updateTechnician: function(req, res) {
		db.Technician.findOneAndUpdate({_id: req.params.id}, req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	deleteTechnician: function (req, res) {
		db.Technician.findById(req.params.id)
		.then(dbModel => dbModel.remove())
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	}
}