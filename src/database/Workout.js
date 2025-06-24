import { saveDatabase } from './utils.js';
import db from './db.json' assert { type: 'json' };

const getAllWorkouts = () => {
  return db.workouts;
}
const createWorkout = (newWorkout) => {
   const isAlreadyAdded =
    db.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
}
export default {
    getAllWorkouts,
    createWorkout,
}