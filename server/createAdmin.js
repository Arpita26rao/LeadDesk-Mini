import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI);

// Delete old admin
await Admin.deleteMany({ email: "admin@example.com" });

// Create fresh admin
const admin = new Admin({
  name: "Admin",
  email: "admin@example.com",
  password: "admin123",
});

await admin.save();

console.log("✅ Fresh admin created");

process.exit();