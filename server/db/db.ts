import { Pool } from "pg";
import { config } from "dotenv";
config()

// Create a new instance of a pool connection
const pool = new Pool({
  user: process.env.DB_USER, // The PostgreSQL username that has access to the database.
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD, // Database password
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined, // Convert the string to a number
});

export default pool;
