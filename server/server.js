import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Lead from "./models/Lead.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.options("*", cors());

connectDB();

app.get("/", (req, res) => res.send("🚀 Growly backend running!"));

app.post("/api/leads", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: "Lead saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/leads", async (req, res) => {
  try {
    const leads = await Lead.find({});
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch leads" });
  }
});

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// API 404 handler
app.use("/api", (req, res) => {
  res.status(404).json({ message: "API route not found" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
