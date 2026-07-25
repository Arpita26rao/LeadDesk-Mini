import express from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import {
  loginAdmin,
  resetAdminPassword,
} from "../controllers/adminController.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// Reset Admin Password
router.get("/reset-password", resetAdminPassword);

// TEMPORARY ROUTE - Create Admin (Delete after use)
router.get("/create-admin", async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({
      email: "admin@gmail.com",
    });

    if (existingAdmin) {
      return res.json({
        success: true,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const admin = await Admin.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    res.json({
      success: true,
      message: "Admin created successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;