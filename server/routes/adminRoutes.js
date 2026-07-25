import express from "express";
import {
  loginAdmin,
  resetAdminPassword,
  createAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/reset-password", resetAdminPassword);
router.get("/create-admin", createAdmin);

export default router;