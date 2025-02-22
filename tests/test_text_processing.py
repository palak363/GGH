import pytest
from framework.text_processor import TextProcessor

@pytest.fixture
def text_processor():
    return TextProcessor()

def test_text_processing(text_processor):
    input_text = "hello world"
    response = text_processor.send_text(input_text)
    assert response == "Automated Output: HELLO WORLD", "Incorrect AI processing!"
