import pytest
from framework.ocr_processor import OCRProcessor

@pytest.fixture
def ocr_processor():
    return OCRProcessor()

def test_ocr_processing(ocr_processor):
    extracted_text = ocr_processor.process_document("test_files/sample_image.png")
    assert len(extracted_text) > 0, "OCR did not extract text!"
