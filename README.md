#  AgriGuard-RAG Assistant

AI-powered agricultural assistant using Retrieval-Augmented Generation (RAG) to provide accurate, context-aware farming and crop management insights.

---

##  Project Overview

AgriGuard-RAG Assistant is an intelligent agricultural chatbot that combines the power of Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG) to provide reliable and domain-specific agricultural information.

The system retrieves relevant information from a custom agricultural knowledge base and uses that context to generate accurate responses for users. This approach minimizes hallucinations and ensures that answers are grounded in trusted agricultural data.

---

##  Problem Statement

Farmers and agricultural enthusiasts often struggle to find accurate and up-to-date information regarding:

* Crop management
* Soil health
* Plant diseases
* Pest control
* Irrigation practices
* Sustainable farming techniques

Traditional chatbots rely only on pre-trained knowledge, which may be outdated or inaccurate. AgriGuard solves this problem by implementing a RAG pipeline that retrieves relevant agricultural information before generating responses.

---

##  Features

* Interactive AI chatbot interface
* Retrieval-Augmented Generation (RAG)
* Agriculture-specific knowledge retrieval
* Context-aware response generation
* Markdown response rendering
* Modern and responsive UI
* Easy knowledge base updates

---

# What is RAG?

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

##  System Architecture

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

##  RAG Workflow

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

##  Technology Stack

### Frontend

   #### 1. Core Library & Build Tool

* React: The core UI library.
* Vite: The build tool and development server.

   #### 2. Dependencies

* Axios: Used for making HTTP requests to the FastAPI backend (e.g., querying the RAG pipeline and triggering document ingestion).

* Lucide React: Provides modern, lightweight icons.

* React Markdown: Used to render markdown responses from the LLM (which formats crop diagnoses with headers, lists, and bold text).
  
   #### 3. Styling
   Vanilla CSS: Global styling and UI design are handled directly in index.css

### Backend

#### 1. Core API & Server:

FastAPI: Web framework used for building the API endpoints (/ingest and /query).

Uvicorn: ASGI server used to run the FastAPI application.

#### 2. Retrieval-Augmented Generation (RAG) Framework:
   
LangChain:
 (langchain, langchain-community, langchain-text-splitters, langchain-google-genai): Used to orchestrate the RAG pipeline, load PDFs, split text into chunks, and query the models.

#### 3. Vector Database & Embeddings

FAISS (CPU version): A local library for efficient similarity search and clustering of dense vectors, serving as the project's vector store.

#### 4. Language Model (LLM)

Gemini 3.5 Flash (via langchain-google-genai): The LLM used to process the retrieved context and generate structured, context-aware answers.

#### 5. Utilities

PyPDF: Used to parse agricultural PDF documents.

python-dotenv: Manages configuration and secrets (like GEMINI_API_KEY) from the environment.

### AI & RAG
The AI & RAG (Retrieval-Augmented Generation) pipeline is implemented in rag_pipeline.py using LangChain.

 #### 1. Document Ingestion & Processing
Data Source: PDF documents (research papers, manuals, reports) stored in the data/pdf's/ directory.
Loading: LangChain's DirectoryLoader and PyPDFLoader extract text page-by-page.
Splitting: RecursiveCharacterTextSplitter splits documents into chunks of 1000 characters with an overlap of 200 characters to preserve context.

 #### 2. Embeddings & Vector Storage
Embedding Model: all-MiniLM-L6-v2 (via Hugging Face SentenceTransformers) runs locally on the CPU to convert text chunks into vector embeddings.
Vector Store: FAISS (Facebook AI Similarity Search). The generated embeddings are indexed and saved locally in the faiss_index/ directory for fast similarity search.
 #### 3. Retrieval & AI Generation
   
* Retrieval: When a query is submitted, the FAISS vector store retrieves the top k = 5 most similar text chunks based on cosine similarity.
AI Model (LLM): gemini-3.5-flash (via Google Generative AI API) is used to synthesize responses.

* Contextual Prompting: A custom system prompt directs the LLM to behave as an expert "Agricultural Disease Assistant." It requires the LLM to prioritize the retrieved context, incorporate conversation history, and format its response with specific sections:
* Crop
* Disease/Pest
* Symptoms
* Causes
* Prevention
* Management/Treatment
* Source (Document & Page Number)

  
## 6. Additional Tools

Document Processing:
• PyPDF

Development Tools:
• VS Code
• Git
• GitHub

Version Control:
• GitHub Repository
---

## 📂 Project Structure

```bash
AgriGuard-RAG-Assistant/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── app.py
│   ├── rag_pipeline.py
│   ├── ingest.py
│   ├── data/
│   │   └── pdfs/
│   └── faiss_index/
│
├── requirements.txt
├── package.json
├── README.md
└── .gitignore

---

## 🛠 Installation

###  Clone Repository

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

 ARPITA UTTAM KUMAR RAYKAR- MSc Data Science 


---

## 📄 License

This project is developed for educational and academic purposes.

---

##  Conclusion

AgriGuard-RAG Assistant demonstrates the practical use of Retrieval-Augmented Generation in agriculture. By combining document retrieval with modern LLMs, the system delivers accurate, reliable, and context-aware agricultural guidance while allowing easy updates to the knowledge base without retraining the model.
