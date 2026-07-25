import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Reset Password
export const resetAdminPassword = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: "admin@gmail.com" });

    if (!admin) {
      return res.json({
        success: false,
        message: "Admin not found",
      });
    }

    admin.password = await bcrypt.hash("admin123", 10);
    await admin.save();

    res.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Admin
export const createAdmin = async (req, res) => {
  try {
    const existing = await Admin.findOne({
      email: "admin@gmail.com",
    });

    if (existing) {
      return res.json({
        success: true,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    res.json({
      success: true,
      message: "Admin created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};