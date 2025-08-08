import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Lead from "./models/Lead.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Proper CORS setup
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Handle preflight requests explicitly
app.options("*", cors());

// Connect DB
connectDB();

// API Routes
app.get("/", (req, res) => res.send("🚀 Growly backend running!"));

app.post("/api/leads", async (req, res) => {
  console.log("📩 Lead POST request received:", req.body);
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: "Lead saved successfully!" });
  } catch (err) {
    console.error("Error saving lead:", err);
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/leads", async (req, res) => {
  try {
    const leads = await Lead.find({});
    res.json(leads);
  } catch (err) {
    console.error("Error fetching leads:", err);
    res.status(500).json({ message: "Failed to fetch leads" });
  }
});

// React app serving and routing fallback
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
