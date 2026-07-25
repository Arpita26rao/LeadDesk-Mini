import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

connectDB();

const app = express();

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://lead-desk-mini-pi.vercel.app",
  "https://lead-desk-mini-mnt6ab3x9-arpita-raos-projects.vercel.app",
  "https://lead-desk-mini-git-main-arpita-raos-projects.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow Postman/server-to-server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes);
app.use("/api/admin", adminRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LeadDesk API is running 🚀",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});