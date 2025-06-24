// To improve the request validation you normally
//  would use a third party package like express-validator.

import workoutService from "../services/workout.service.js";

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send(allWorkouts);
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.id);
  res.send("Get one workout with ID: " + req.params.id);
};

const createWorkout = (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  if (!name || !mode || !equipment || !exercises || !trainerTips) return
  const  newWorkout = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  };
  const createWorkout = workoutService.createWorkout(newWorkout);
  res.status(201).send({status: 'ok', data: createWorkout});
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(
    req.params.id,
    req.body
  );
  res.send(
    "Update workout with ID: " +
      req.params.id +
      " to " +
      JSON.stringify(updatedWorkout)
  );
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout(req.params.id);
  res.send("Delete workout with ID: " + req.params.id);
};

export default {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
