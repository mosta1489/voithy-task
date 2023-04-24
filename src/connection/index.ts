import { Pool } from "pg";
import { accessEnv } from "../helpers";

let connectionString = accessEnv("DATABASE_URI_LOCAL");

let conn: Pool;

conn = new Pool({ connectionString });

conn
  .connect()
  .then(() => {
    console.log("Database connected successfully ✅ ✅ ✅ ");
  })
  .catch((error) => {
    console.log(
      "Error connecting to Data Base  ❌ ❌ ❌ ❌ ❌ ❌ ❌",
      error.message
    );
  });

export default conn;
