import requests

class OCRProcessor:
    def __init__(self, api_url="http://localhost:5002/upload"):
        self.api_url = api_url

    def process_document(self, file_path):
        with open(file_path, "rb") as f:
            files = {"file": f}
            response = requests.post(self.api_url, files=files)
        return response.json().get("extractedText", "Error extracting text")
