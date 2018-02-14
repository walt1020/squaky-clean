const router = require("express").Router();

const appointmentController = require("../../Controllers/appointmentController");


router.get("/api/appointments", appointmentController.findAll)
	
router.post("/api/create", function(req, res) {
		appointmentController.createCustomer;
	});


router.get("/api/:id", appointmentController.findById)
	
router.put("/api/:id/update", function(req, res) {
	appointmentController.updateCustomer
})

router.delete("/api/:id/delete", function(req, res){

	appointmentController.deleteCustomer

})
module.exports = router;