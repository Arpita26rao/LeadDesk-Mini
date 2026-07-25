export const updateLeadStatus = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    if (lead.status === "New") {
      lead.status = "Contacted";
    } else if (lead.status === "Contacted") {
      lead.status = "Closed";
    } else {
      lead.status = "New";
    }

    await lead.save();

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};