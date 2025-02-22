const mongoose = require("mongoose");

const TextEntrySchema = new mongoose.Schema({
  inputText: { type: String, required: true },
  processedText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TextEntry", TextEntrySchema);
