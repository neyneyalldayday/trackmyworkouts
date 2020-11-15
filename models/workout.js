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
                    required: true
                },
                name: {
                    type: String,
                    required: true
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

            }]
    
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;