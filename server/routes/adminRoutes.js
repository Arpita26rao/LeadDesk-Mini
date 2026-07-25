import express from "express";
import {
  loginAdmin,
  resetAdminPassword,
} from "../controllers/adminController.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// Reset Admin Password
router.get("/reset-password", resetAdminPassword);

export default router;