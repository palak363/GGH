import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";

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

    // Fetch updated history
    fetchHistory();
  } catch (error) {
    console.error("Error processing text:", error);
  }
  setLoading(false);
};

// Fetch history from the database
const fetchHistory = async () => {
  try {
    const response = await fetch("http://localhost:5000/history");
    const data = await response.json();
    console.log("History:", data);
  } catch (error) {
    console.error("Error fetching history:", error);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <h1 className="text-xl font-bold mb-4">Intelligent Process Automation</h1>
        <Textarea
          placeholder="Enter text for processing..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleProcess} disabled={loading}>
          {loading ? "Processing..." : "Automate"}
        </Button>
        {processedText && (
          <CardContent className="mt-4 p-3 bg-gray-200 rounded-md">
            {processedText}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default AutomationApp;
