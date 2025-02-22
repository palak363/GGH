from flask import Flask, request, jsonify
import pytesseract
from PIL import Image
import os
import pdf2image
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Set Tesseract path if necessary (Windows users may need this)
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    filename = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filename)

    if file.filename.lower().endswith((".png", ".jpg", ".jpeg")):
        text = extract_text_from_image(filename)
    elif file.filename.lower().endswith(".pdf"):
        text = extract_text_from_pdf(filename)
    else:
        return jsonify({"error": "Unsupported file format"}), 400

    return jsonify({"extractedText": text})

def extract_text_from_image(image_path):
    """Extract text from an image using Tesseract OCR"""
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text

def extract_text_from_pdf(pdf_path):
    """Convert PDF to images and extract text"""
    images = pdf2image.convert_from_path(pdf_path)
    text = "\n".join([pytesseract.image_to_string(img) for img in images])
    return text

if __name__ == "__main__":
    app.run(port=5002, debug=True)
