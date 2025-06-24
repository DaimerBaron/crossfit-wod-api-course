import express from 'express';
import v1WorkoutRoutes from './v1/routes/workout.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1/workouts', v1WorkoutRoutes);

app.listen(PORT, (req, res) =>{
    console.log(`Server is running on port ${PORT}`);
} )