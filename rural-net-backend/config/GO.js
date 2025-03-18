import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// ✅ Create MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS || "",  // Default to empty string if no password
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,  // Default port 3306
});

// ✅ Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
    process.exit(1); // Exit process if connection fails
  } else {
    console.log("✅ Connected to MySQL Database!");
  }
});

export default db;
