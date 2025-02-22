# **Intelligent Process Automation (IPA)**  

## **Overview**  
**Intelligent Process Automation (IPA)** is an AI-driven system designed to automate repetitive business processes such as **data entry, document processing (OCR), and web automation**. It leverages **machine learning, OCR, and automation frameworks** to enhance operational efficiency and reduce manual effort.  

---

## **Features**  
- **AI-Powered Text Processing** – Automates data processing using AI and NLP models.  
- **OCR & Document Processing** – Extracts text from images and PDFs for further automation.  
- **Web Automation** – Automates form submissions and UI interactions for business applications.  
- **Database Integration** – Securely stores and manages extracted data using **MongoDB Atlas**.  
- **Cloud Deployment** – Fully containerized using **Docker** and deployed on **AWS EC2** with Nginx.  

---

## **Technology Stack**  
### **Frontend**  
- React.js  
- Tailwind CSS  
- Vercel (Hosting)  

### **Backend**  
- Node.js (Express.js API)  
- Flask (Python API for OCR)  
- OpenAI GPT API (AI-powered automation)  

### **Database**  
- MongoDB Atlas (Cloud Database)  

### **Machine Learning & Automation**  
- **Tesseract OCR** (Text extraction from images & PDFs)  
- **Selenium & PyTest** (Web automation & testing)  

### **Deployment**  
- **Docker** (Containerization)  
- **AWS EC2** (Cloud Hosting)  
- **Nginx** (Reverse Proxy)  

---

## **Project Structure**  
```
Intelligent-Process-Automation/
│── frontend/                # React.js UI (Vercel)
│── backend/                 # Node.js API (Text Processing)
│── ocr_service/             # Flask API for OCR
│── automation_framework/    # Selenium & PyTest for automation
│── docker-compose.yml       # Docker configuration
│── README.md                # Project documentation
```

---

## **Installation and Setup**  

### **1. Clone the Repository**  
```sh
git clone https://github.com/your-username/Intelligent-Process-Automation.git
cd Intelligent-Process-Automation
```

### **2. Backend Setup (Node.js API for Text Processing)**  
```sh
cd backend
npm install
npm start  # Runs on http://localhost:5000
```

### **3. OCR Service Setup (Flask API for Document Processing)**  
```sh
cd ../ocr_service
pip install -r requirements.txt
python ocr_server.py  # Runs on http://localhost:5002
```

### **4. Frontend Setup (React.js UI)**  
```sh
cd ../frontend
npm install
npm start  # Runs on http://localhost:3000
```

---

## **API Endpoints**  

### **AI-Powered Text Processing (Node.js API)**  
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| POST   | `/process`      | Processes input text with AI |

### **OCR & Document Processing (Flask API)**  
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| POST   | `/upload`       | Extracts text from an uploaded document |

---

## **Cloud Deployment**  

### **1. Deploying Backend on AWS EC2**  
- Launch an **Ubuntu 22.04 LTS** EC2 instance.  
- Install Docker:  
  ```sh
  sudo apt update
  sudo apt install -y docker.io
  ```  
- Build and run containers:  
  ```sh
  docker-compose up -d
  ```  
- Configure **Nginx as a reverse proxy** to route API requests.  

### **2. Deploying Frontend on Vercel**  
- Install **Vercel CLI**:  
  ```sh
  npm install -g vercel
  ```  
- Deploy the application:  
  ```sh
  vercel --prod
  ```

---

## **Testing and Automation**  

### **1. Run Web Automation Tests**  
```sh
pytest tests/test_web_automation.py
```

### **2. Run AI-Powered Text Processing Tests**  
```sh
pytest tests/test_text_processing.py
```

### **3. Run OCR Processing Tests**  
```sh
pytest tests/test_ocr_processing.py
```

---

## **Future Enhancements**  
- Implement **AI-based document classification**.  
- Add **voice-to-text processing**.  
- Introduce **workflow automation for multiple tasks**.  
- Enhance **OCR accuracy with deep learning models**.  

---

## **License**  
This project is licensed under the **MIT License**.  

---

## **Contributing**  
Contributions are welcome! Follow these steps:  
1. Fork the repository.  
2. Create a new branch (`git checkout -b feature-branch`).  
3. Commit your changes (`git commit -m "Added new feature"`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Open a Pull Request for review.  

---

This **Intelligent Process Automation (IPA)** system integrates **AI, automation, and cloud computing** to streamline business processes, making operations more efficient and scalable.
