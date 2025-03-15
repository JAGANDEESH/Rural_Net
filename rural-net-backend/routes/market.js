const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Fetch all market prices
router.get('/prices', (req, res) => {
  db.query('SELECT * FROM market_prices', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

module.exports = router;
