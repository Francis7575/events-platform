import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import pool from './db/db'

const FRONTEND_URL = process.env.FRONTEND_URL;

type Express = express.Application;
const app: Express = express();

// CORS options
const corsOptions = {
  origin: FRONTEND_URL, // Allow requests from this origin
  credentials: true, // Enable cookies to be sent and received
  optionsSuccessStatus: 200, // For older browsers
};

// Use CORS middleware with options
app.use(cors(corsOptions));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", FRONTEND_URL!);
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Combine headers
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

pool
  .connect()
  .then(() => console.log('Connected to postgresql database'))
  .catch((err: unknown) => console.log('Error connecting to postgresql database', err));

export default app