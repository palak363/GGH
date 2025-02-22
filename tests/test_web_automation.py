import pytest
from framework.web_automation import WebAutomation

@pytest.fixture
def web_automation():
    automation = WebAutomation()
    yield automation
    automation.close()

def test_form_submission(web_automation):
    web_automation.open_page("http://localhost:3000")  # Update with frontend URL
    web_automation.fill_form("textarea", "button", "Hello Automation!")
    result_text = web_automation.get_processed_text("div.bg-gray-200 p")
    assert "Automated Output" in result_text, "Text processing failed!"
