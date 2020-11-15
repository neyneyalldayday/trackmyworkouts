let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let workoutSchema = new Schema({
    day: {
        type: Date,
        deafault: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true 
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: number
            },
            reps: {
                type: number
            },
            weight: {
                type: number
            },
            sets: {
                type: number
            },
            distance: {
                type: number
            }
        }]
});
const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
