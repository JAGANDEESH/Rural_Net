import express from "express";
import db from "../config/db.js";

const router = express.Router();

// ✅ Get All Market Trends
router.post("/trends", (req, res) => {
  db.query("SELECT * FROM market_trends", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });
    res.json(results);
  });
});

// ✅ Add New Market Trend
router.post("/trends", (req, res) => {
  const { name, price, change_percentage, volume } = req.body;
  const sql = "INSERT INTO market_trends (name, price, change_percentage, volume) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, price, change_percentage, volume], (err, result) => {
    if (err) return res.status(500).json({ message: "Error adding trend", error: err });
    res.json({ message: "Market trend added successfully!" });
  });
});

// ✅ Update Market Trend
router.put("/trends/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, change_percentage, volume } = req.body;
  const sql = "UPDATE market_trends SET name=?, price=?, change_percentage=?, volume=? WHERE id=?";
  db.query(sql, [name, price, change_percentage, volume, id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error updating trend", error: err });
    res.json({ message: "Market trend updated successfully!" });
  });
});

// ✅ Delete Market Trend
router.delete("/trends/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM market_trends WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Error deleting trend", error: err });
    res.json({ message: "Market trend deleted successfully!" });
  });
});

export default router;
