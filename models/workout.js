const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        require: "Please enter a type of exercise"
      },
      name: {
        type: String,
        require: "Please enter a Name"
      },
      duration: {
        type: Number,
        require: "Please enter a Duration"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
},{
  toJSON: {virtuals: true}
});

WorkoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((acc, curVal) => acc + curVal.duration, 0)
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
