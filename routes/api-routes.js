const db = require("../models")

module.exports = function (app){
  app.get("/api/workouts", async function(req,res){
    const data = await db.Workout.find()
    res.json(data)
  })

  app.put("/api/workouts/:id", async function(req,res){
    var id = req.params.id
    var data = req.body
    const updatedWorkout = await db.Workout.findByIdAndUpdate(id, {$push: {exercises: data}})
    res.json(updatedWorkout)
  })

  app.post("/api/workouts", async function(req,res){
    const newWorkout = await db.Workout.create({})
    res.json(newWorkout)
  })

  app.get("/api/workouts/range", async function(req,res){
    const data = await db.Workout.find().limit(7)
    res.json(data)
  })
}

