var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var api =  require('./api');

// restrict index for logged in user only
router.use('/', api);

module.exports = router;

