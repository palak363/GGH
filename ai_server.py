from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Set your OpenAI API key (Replace with your own key)
openai.api_key = "your_openai_api_key"

@app.route("/process", methods=["POST"])
def process_text():
    data = request.get_json()
    input_text = data.get("inputText")

    if not input_text:
        return jsonify({"error": "No text provided"}), 400

    try:
        # AI Model Processing (GPT-based response)
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": input_text}]
        )

        ai_output = response["choices"][0]["message"]["content"]
        return jsonify({"processedText": ai_output})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5001, debug=True)
