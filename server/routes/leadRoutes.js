import express from "express";
import {
  createLead,
  getLeads,
  updateLeadStatus,
} from "../controllers/leadController.js";

const router = express.Router();

// Create a new lead
router.post("/", createLead);

// Get all leads
router.get("/", getLeads);

// Update lead status
router.put("/:id", updateLeadStatus);

export default router;