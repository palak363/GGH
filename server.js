const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// API endpoint to process text
app.post("/process", (req, res) => {
    const { inputText } = req.body;
    
    if (!inputText) {
        return res.status(400).json({ error: "No text provided" });
    }

    // Simulated AI processing (convert text to uppercase)
    const processedText = `Automated Output: ${inputText.toUpperCase()}`;

    res.json({ processedText });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
