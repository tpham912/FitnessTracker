const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newWorOutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      routine: {
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

      weigh: {
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
});

const Workout = mongoose.model("Workout", newWorOutSchema);

module.exports = Workout;
