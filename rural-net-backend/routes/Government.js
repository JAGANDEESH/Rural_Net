const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Fetch all government updates
router.get("/", (req, res) => {
  db.query("SELECT * FROM government_updates", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Add new government update (Admin only)
router.post("/add", (req, res) => {
  const { title, description, date } = req.body;
  db.query(
    "INSERT INTO government_updates (title, description, date) VALUES (?, ?, ?)",
    [title, description, date],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Update added successfully!" });
    }
  );
});

module.exports = router;
