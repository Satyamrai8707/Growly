import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const { name, email, phone, businessType, message } = req.body;

    if (!name || !email || !phone || !businessType || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const lead = new Lead({ name, email, phone, businessType, message });
    await lead.save();

    res.status(201).json({ message: "Lead saved successfully", lead });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
