import express from "express";
import { loginAdmin } from "../controllers/adminController.js";
import { loginAdmin, resetAdminPassword } from "../controllers/adminController.js";

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// Reset Admin Password
router.post("/reset-password", resetAdminPassword);


export default router;