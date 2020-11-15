let db = require("../Develop/public/models");
let mongoose = require("mongoose");

module.exports = function(app){
    app.post("/api/workouts", function({ body }, res){
        db.Workout.create(body)
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts", function(req,res){
        db.Workout.find({})
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });
    });
}