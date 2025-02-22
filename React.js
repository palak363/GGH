import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [processedText, setProcessedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  // Handle AI text processing
  const handleProcess = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputText }),
      });

      const data = await response.json();
      setProcessedText(data.processedText);
    } catch (error) {
      console.error("Error processing text:", error);
    }
    setLoading(false);
  };

  // Handle File Upload & OCR Processing
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5002/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setExtractedText(data.extractedText || "No text found");
    } catch (error) {
      console.error("OCR Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-lg p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-xl font-bold mb-4">Intelligent Automation System</h1>

        {/* AI Text Processing */}
        <textarea
          placeholder="Enter text for processing..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="mb-4 w-full p-2 border rounded-md"
        />
        <button
          onClick={handleProcess}
          disabled={loading}
          className="p-2 w-full bg-blue-500 text-white rounded-md"
        >
          {loading ? "Processing..." : "Automate"}
        </button>
        {processedText && (
          <div className="mt-4 p-3 bg-gray-200 rounded-md">
            <p>{processedText}</p>
          </div>
        )}

        {/* OCR & Document Processing */}
        <h2 className="text-lg font-semibold mt-6 mb-2">OCR & Document Processing</h2>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="p-2 w-full bg-green-500 text-white rounded-md"
        >
          {loading ? "Extracting..." : "Upload & Extract"}
        </button>
        {extractedText && (
          <div className="mt-4 p-3 bg-gray-200 rounded-md">
            <p>{extractedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
