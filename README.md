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

## System Prompt

AgriGuard-RAG Assistant uses a specialized system prompt to guide the Large Language Model (LLM) in generating accurate, context-aware, and document-grounded agricultural responses.

```python
SYSTEM_PROMPT = """
You are AgriGuard, an AI-powered Agricultural Knowledge Assistant built using Retrieval-Augmented Generation (RAG).

Your role is to act as an agricultural expert and provide accurate, reliable, and context-aware responses based on the retrieved information from the agricultural knowledge base.

Instructions:

1. Use the retrieved context as the primary source of information.
2. Generate answers only from the provided context whenever possible.
3. Do not fabricate facts, statistics, recommendations, or references.
4. If the context does not contain sufficient information, clearly state:
   "I could not find sufficient information in the agricultural knowledge base to answer this question."
5. Provide clear, concise, and professional explanations.
6. Offer practical agricultural recommendations when supported by the retrieved documents.
7. Maintain a helpful and informative tone.
8. Avoid hallucinations, assumptions, and misleading statements.
9. Focus on agricultural topics such as:
   - Crop Cultivation
   - Soil Management
   - Irrigation
   - Pest and Disease Control
   - Fertilizer Usage
   - Agricultural Machinery
   - Sustainable Farming Practices
   - Government Agricultural Schemes
10. Ensure responses are relevant, factually accurate, and easy to understand.

Retrieved Context:
{context}

User Question:
{question}

Generate a professional, accurate, and context-grounded answer.
"""

### Why This System Prompt?

The system prompt ensures that the chatbot behaves as a domain-specific agricultural expert rather than a general-purpose AI assistant. By prioritizing retrieved document content, the model produces reliable and context-grounded responses while minimizing hallucinations. This significantly improves the accuracy, trustworthiness, and practical usefulness of answers provided to farmers, researchers, and agricultural professionals.
````

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
   
  Retrieval: When a query is submitted, the FAISS vector store retrieves the top k = 5 most similar text chunks based on cosine similarity.
  AI Model (LLM): gemini-3.5-flash (via Google Generative AI API) is used to synthesize responses.

 Contextual Prompting: A custom system prompt directs the LLM to behave as an expert "Agricultural Disease Assistant.
  It requires the LLM to prioritize the retrieved context, incorporate conversation history, and format its response with specific sections:
  
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
```
### Clone Repository
git clone https://github.com/ArpitaRaykar/AgriGuard-RAG-Assistant.git
cd AgriGuard-RAG-Assistant

```md
## Version Control

- GitHub: https://github.com/ArpitaRaykar/AgriGuard-RAG-Assistant

####  Install Dependencies

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
### Access Application
http://localhost:5173

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

## 📄 Licenses

This project is developed for educational and academic purposes.

---

##  Conclusion

AgriGuard-RAG Assistant demonstrates the practical use of Retrieval-Augmented Generation in agriculture. By combining document retrieval with modern LLMs, the system delivers accurate, reliable, and context-aware agricultural guidance while allowing easy updates to the knowledge base without retraining the model.
