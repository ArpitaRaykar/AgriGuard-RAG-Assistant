# 🌾 AgriGuard-RAG Assistant

AI-powered agricultural assistant using Retrieval-Augmented Generation (RAG) to provide accurate, context-aware farming and crop management insights.

---

## 📌 Project Overview

AgriGuard-RAG Assistant is an intelligent agricultural chatbot that combines the power of Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG) to provide reliable and domain-specific agricultural information.

The system retrieves relevant information from a custom agricultural knowledge base and uses that context to generate accurate responses for users. This approach minimizes hallucinations and ensures that answers are grounded in trusted agricultural data.

---

## 🎯 Problem Statement

Farmers and agricultural enthusiasts often struggle to find accurate and up-to-date information regarding:

* Crop management
* Soil health
* Plant diseases
* Pest control
* Irrigation practices
* Sustainable farming techniques

Traditional chatbots rely only on pre-trained knowledge, which may be outdated or inaccurate. AgriGuard solves this problem by implementing a RAG pipeline that retrieves relevant agricultural information before generating responses.

---

## 🚀 Features

* Interactive AI chatbot interface
* Retrieval-Augmented Generation (RAG)
* Agriculture-specific knowledge retrieval
* Context-aware response generation
* Markdown response rendering
* Modern and responsive UI
* Easy knowledge base updates

---

## 🧠 What is RAG?

Retrieval-Augmented Generation (RAG) is an AI architecture that combines:

1. Information Retrieval
2. Large Language Models (LLMs)

Instead of relying solely on model training data, RAG first retrieves relevant information from external documents and then uses that information to generate responses.

### Benefits of RAG

* Improved answer accuracy
* Reduced hallucinations
* Up-to-date knowledge
* Easy document updates
* No need for model retraining

---

## ⚙️ System Architecture

```text
User Query
    │
    ▼
Frontend (React)
    │
    ▼
Backend API
    │
    ▼
Retriever
(Vector Database / Knowledge Base)
    │
    ▼
Relevant Documents
    │
    ▼
LLM
    │
    ▼
Generated Response
    │
    ▼
Frontend Display
```

---

## 🔄 RAG Workflow

### Step 1: User Query

The user submits an agriculture-related question.

### Step 2: Retrieval

The retriever searches the agricultural knowledge base for relevant documents.

### Step 3: Context Generation

Relevant information is extracted and prepared as context.

### Step 4: Response Generation

The LLM combines:

* User Query
* Retrieved Context

to generate an accurate answer.

### Step 5: Display

The response is returned and displayed in the chatbot interface.

---

## 💻 Technology Stack

### Frontend

* React.js
* Vite
* Axios
* React Markdown
* Lucide React

### Backend

* Python / Flask / FastAPI *(Update according to your implementation)*

### AI & RAG

* OpenAI API / Gemini API *(Update according to your implementation)*
* LangChain *(if used)*
* Vector Database *(FAISS / ChromaDB / Pinecone)*

---

## 📂 Project Structure

```bash
AgriGuard-RAG-Assistant/
│
├── public/
├── src/
│   ├── components/
│   ├── services/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── .gitignore
```

---

## 🛠 Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AgriGuard-RAG-Assistant.git
cd AgriGuard-RAG-Assistant
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 💡 Sample Questions

* What are the symptoms of rice blast disease?
* How can I improve soil fertility naturally?
* Which crop is suitable for black soil?
* How do I control aphids in tomato plants?
* What irrigation method is best for water conservation?

---

## 📈 Future Enhancements

* Multi-language support
* Voice assistant integration
* Weather forecasting integration
* Crop recommendation system
* Plant disease detection using images
* Farmer community support features

---

## 🎥 Project Presentation

The presentation video includes:

* Application overview
* System prompt explanation
* RAG implementation details
* Benefits of RAG
* Demonstration of the application

---

## 👨‍💻 Author

**Name:** YOUR_NAME

**Register Number:** YOUR_REG_NO

---

## 📄 License

This project is developed for educational and academic purposes.

---

## ⭐ Conclusion

AgriGuard-RAG Assistant demonstrates the practical use of Retrieval-Augmented Generation in agriculture. By combining document retrieval with modern LLMs, the system delivers accurate, reliable, and context-aware agricultural guidance while allowing easy updates to the knowledge base without retraining the model.
