const router = require("express").Router();
const customerRoutes = require("./customer");
const appointmentRoutes = require("./appointment");
const technicianRoutes = require("./technician");



router.use("/customer", customerRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/technician", technicianRoutes);

module.exports = router;