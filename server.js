const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db");
const TextEntry = require("./models/TextEntry");

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// API endpoint to process text and save it to DB
app.post("/process", async (req, res) => {
  const { inputText } = req.body;

  if (!inputText) {
    return res.status(400).json({ error: "No text provided" });
  }

  // Simulated AI Processing
  const processedText = `Automated Output: ${inputText.toUpperCase()}`;

  try {
    // Save to MongoDB
    const newEntry = new TextEntry({ inputText, processedText });
    await newEntry.save();

    res.json({ processedText });
  } catch (error) {
    res.status(500).json({ error: "Database Error" });
  }
});

// Fetch all processed texts
app.get("/history", async (req, res) => {
  try {
    const history = await TextEntry.find().sort({ createdAt: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
