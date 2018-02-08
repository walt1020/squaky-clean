const db = require("../appointment");


module.exports = {
	findAll: function(req, res) {
		db.Appointment.find(req.query)
		.sort(1)
		.then(dbModal => res.JSON(dbModal))
		.catch(err => res.status(422).json(err))
	},

	findById: function(res, res) {
		db.Appointment.findById(req.params.id)
		.then(dbModal => res.JSON(dbModal))
		.catch(err => res.status(422).json(err))
	},


	createAppointment: function(req, res) {
		db.Appointment.create(req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	updateAppointment: function(req, res) {
		db.Appointment.findOneAndUpdate({_id: req.params.id}, req.body)
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	},

	deleteAppointment: function (req, res) {
		db.Appointment.findById(req.params.id)
		.then(dbModel => dbModel.remove())
		.then(dbModel => res.JSON(dbModel))
		.catch(err => res.status(422).json(err)) 
	}
}