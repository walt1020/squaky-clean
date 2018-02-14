const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/index.js");
const bodyParser = require("body-parser");


// Passport dependencies
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Mongoose dependencies and connection
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/node-auth')
   .then(() =>  console.log('connection succesful'))
   .catch((err) => console.error("mongoose:", err));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/public/assets')));
app.use(passport.initialize());
app.use(passport.session());

// const localSignupStrategy = require('./Controllers/local-signup');
// const localLoginStrategy = require('./Controllers/local-login');
// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./Controllers/AuthController');

// sets the routes to use /api instead of /
app.use('/api', routes)
var users = require('./client/public/api/routes/users');
app.use('/users', users);




// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.post('/service',function(req,res){
console.log(req.body);
})

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



module.exports = app;
