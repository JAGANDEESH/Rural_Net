import express from "express";
import db from "../config/GO.js";  // ✅ Import the database connection

const router = express.Router();

// ✅ Fetch all government updates
router.get("/", (req, res) => {
  db.query("SELECT * FROM government_updates ORDER BY date DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ✅ Add a new government update (Admin only)
router.post("/add", (req, res) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  db.query(
    "INSERT INTO government_updates (title, description, date) VALUES (?, ?, ?)",
    [title, description, date],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Update added successfully!" });
    }
  );
});

export default router;
