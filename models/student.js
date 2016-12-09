// Setting up our Student model to talk to the DB

// /models/student.js
var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  slack_name: {type: String, required: true}
});

var Student = mongoose.model('student', Schema);

// Make this available to our other files
module.exports = Student;
