const router = require("express").Router();

const technicianController = require("../../Controllers/technicianController");

router.get("/api/", technicianController.findAll)
	
router.post("/api/create", function(req, res) {
		technicianController.createCustomer;
	});


router.get("/api/:id", technicianController.findById)
	
router.put("/api/:id/update", function(req, res) {
	technicianController.updateCustomer
})

router.delete("/api/:id/delete", function(req, res){

	technicianController.deleteCustomer

})

module.exports = router;