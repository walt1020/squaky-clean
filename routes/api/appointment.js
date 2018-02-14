const router = require("express").Router();

const appointmentController = require("../../Controllers/appointmentController");


router.get("/", appointmentController.findAll)
	
router.post("/create", function(req, res) {
		appointmentController.createCustomer;
	});


router.get("/:id", appointmentController.findById)
	
router.put("/:id/update", function(req, res) {
	appointmentController.updateCustomer
})

router.delete("/:id/delete", function(req, res){

	appointmentController.deleteCustomer

})
module.exports = router;