const Workout = require("../models/workout.js");

module.exports = function (app){
  app.get("/api/workouts", function(req,res){
    //this will return all current workouts
  })

  app.put("/api/workouts/:id", function(req,res){
    var id = req.params.id
    var data = req.body
    //Not sure what this is doing
  })

  app.post("/api/workouts", function(req,res){
    var data = req.data
    //This will insert the workout into the database
  })

  app.get("/api/workouts/range", function(req,res){
    //Not sure what this does either
  })
}

