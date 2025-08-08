const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead"); 

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, businessType, message } = req.body;

    if (!name || !email || !phone || !businessType) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newLead = new Lead({
      name,
      email,
      phone,
      businessType,
      message,
      createdAt: new Date(),
    });

    await newLead.save();

    res.status(200).json({ message: "Lead saved successfully!" });
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
