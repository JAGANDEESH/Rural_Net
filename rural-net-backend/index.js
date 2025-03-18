import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/GO.js";  // ✅ Import the database connection
import marketRoutes from "./routes/market.js";
import governmentRoutes from "./routes/Government.js";  // ✅ Import government routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/market", marketRoutes);
app.use("/api/government", governmentRoutes);

// ✅ Test API Route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
