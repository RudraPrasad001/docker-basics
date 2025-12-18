import {Pool} from "pg";
import dotenv from "dotenv";
//You should use the service name provided in the docker compose instead of using localhost
//it will save you confusion,thanks

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default pool;
