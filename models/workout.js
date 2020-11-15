let mongoose = require("mongoose");
const { stringify } = require("querystring");

let Schema = mongoose.Schema;

let workoutSchema = new Schema({
    day: {
        type: Date,
         default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: "where the gains comming from today"
                },
                name: {
                    type: String,
                    required: "workout name"
                },
                reps: {
                    type:Number
                },
                sets: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                duration: {
                    type: Number
                },
                distance: {
                    type: Number
                }

            },]

    
}, { toJSON: { virtuals: true } });
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;