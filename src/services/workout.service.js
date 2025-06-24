import Workout from '../database/Workout.js';
import {v4 as uuid} from 'uuid';

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts
};
const getOneWorkout = () => {
  return
};
const createWorkout = (newWorkout) => {
    const workoutToInsert = {
    ...newWorkout,
      id: uuid,
      createdAt: new Date().toISOString('YYYY-MM-DDTHH:mm:ss.sssZ'),
    }
    const createWorkout = Workout.createWorkout(workoutToInsert);
    return createWorkout;
};
const updateOneWorkout = () => {
  return
};
const deleteOneWorkout = () => {
 return
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateOneWorkout,
  deleteOneWorkout,
  getAllWorkouts,
};
