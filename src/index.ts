import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routes/users.routes';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/users', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
