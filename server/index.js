import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const sqlDB = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: process.env.SQL_DATABASE_PASS,
  database: "test",
});

sqlDB.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("SQL Database Connected Successfully ✅");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
