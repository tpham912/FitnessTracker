const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newWorOutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise routine",
      },

      name: {
        type: String,
        trim: true,
      },

      duration: {
        type: Number,
      },

      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
},
{
  toJSON: {
    virtuals: true
  }
}
);

newWorOutSchema.virtual('totalDuration').get(function() {
  if(this.exercises.length > 0){
    let aggregateDuration = 0
    this.exercises.forEach(exercise => {
      aggregateDuration += exercise.duration
      
      // aggregateDuration = aggregateDuration + exercise.duration
    })
    return aggregateDuration
  }else {
    return 0
  }
})

const Workout = mongoose.model("Workout", newWorOutSchema);

module.exports = Workout;
