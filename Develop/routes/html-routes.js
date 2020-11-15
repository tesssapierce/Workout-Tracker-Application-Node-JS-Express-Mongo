const Workout = require("../models/workout.js");
var path = require('path');

module.exports = function (app){

  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
  })

  app.get("/id=:id", function(req,res){
    //This will return one ID's data
  })

  app.get("/excercise", function(req,res){
    res.send("/html/index.html")
  })

}