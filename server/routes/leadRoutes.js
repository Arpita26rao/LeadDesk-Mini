import express from "express";
import { createLead, getLeads } from "../controllers/leadController.js";

const router = express.Router();

// Create a new lead
router.post("/", createLead);

// Get all leads
router.get("/", getLeads);

export default router;