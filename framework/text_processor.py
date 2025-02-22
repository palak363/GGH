import requests

class TextProcessor:
    def __init__(self, api_url="http://localhost:5000/process"):
        self.api_url = api_url

    def send_text(self, input_text):
        response = requests.post(self.api_url, json={"inputText": input_text})
        return response.json().get("processedText", "Error processing text")
