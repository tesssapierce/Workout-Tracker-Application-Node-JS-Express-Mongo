const Workout = require("../models/workout.js");
var path = require('path');

module.exports = function (app){

  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/html/index.html"))
  })

  app.get("/id=:id", function(req,res){
    //This will return one ID's data
  })

  app.get("/exercise", function(req,res){
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"))
  })

  app.get("/stats", function(req,res){
    res.sendFile(path.join(__dirname, "../public/html/stats.html"))
  })

}