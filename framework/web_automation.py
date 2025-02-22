from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

class WebAutomation:
    def __init__(self, driver_path="chromedriver"):
        self.driver = webdriver.Chrome(driver_path)

    def open_page(self, url):
        self.driver.get(url)
        time.sleep(2)

    def fill_form(self, text_area_selector, submit_button_selector, input_text):
        text_area = self.driver.find_element(By.CSS_SELECTOR, text_area_selector)
        text_area.send_keys(input_text)
        
        submit_button = self.driver.find_element(By.CSS_SELECTOR, submit_button_selector)
        submit_button.click()
        
        time.sleep(3)  # Wait for processing

    def get_processed_text(self, result_selector):
        result = self.driver.find_element(By.CSS_SELECTOR, result_selector)
        return result.text

    def close(self):
        self.driver.quit()
