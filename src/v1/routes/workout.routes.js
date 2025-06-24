import express from "express";
import workoutController from "../../controllers/workout.controller.js";
const router = express.Router();

router
  .get("/", workoutController.getAllWorkouts)
  .get("/:id", workoutController.getOneWorkout)
  .post("/", workoutController.createWorkout)
  .patch("/:id", workoutController.updateOneWorkout)
  .delete("/:id", workoutController.deleteOneWorkout);

export default router;
