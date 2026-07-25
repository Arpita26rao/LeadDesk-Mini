import Lead from "../models/Lead.js";

// Create Lead
export const createLead = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    // Validation
    if (!name || !email || !budget || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      budget,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Leads with Search
export const getLeads = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            {
              name: {
                $regex: req.query.search,
                $options: "i",
              },
            },
            {
              email: {
                $regex: req.query.search,
                $options: "i",
              },
            },
          ],
        }
      : {};

    const leads = await Lead.find(keyword).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Lead Status
export const updateLeadStatus = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    // Status Cycle:
    // New → Contacted → Closed → New
    switch (lead.status) {
      case "New":
        lead.status = "Contacted";
        break;

      case "Contacted":
        lead.status = "Closed";
        break;

      case "Closed":
      default:
        lead.status = "New";
        break;
    }

    await lead.save();

    res.status(200).json({
      success: true,
      message: "Lead status updated successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};