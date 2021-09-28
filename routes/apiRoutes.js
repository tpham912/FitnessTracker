const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/workouts", (req, res) => {
  workout.find({})
    .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  workout.find({})
    .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/workouts", async ({ body }, res) => {
  try { 
    const dbWorkout = await Workout.create({body});
      res.json(dbworkout);
    }
    catch { 
      (err) => {
      res.status(400).json(err);
    };
  };
});

router.post("/workouts", ({ body }, res) => {
  workout.insertMany(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
