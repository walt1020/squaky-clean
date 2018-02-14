var mongoose = require("mongoose");
var passport = require("passport");
var Customer = require("../models/customer");
console.log('authcontroller.js');

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
  console.log('authcontroller.js: home');
};

// Go to registration page
userController.register = function(req, res) {
  res.send(res);
  // res.render('register');
};

// Post registration
userController.doRegister = function(req, res) {
  console.log(req.body);
  // User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    Customer.create(new Customer({ 
      firstName:  req.body.firstName,
      lastName:  req.body.lastName,
      phone:  req.body.phone,
      username:  req.body.username,
      password:  req.body.password,
      position:  req.body.position,
      emailAddress:  req.body.emailAddress,
      home_address:  req.body.home_address,
      technician:  req.body.technician,
      product_selected:  req.body.product_selected,
      special_instructions: req.body.special_instructions
    }), function(err, customer) {
    if (!err) {
      return res.json({customer:customer});
      // return res.render('register', { user : user });
    }
    else{
      return res.json({err:err});
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports = userController;