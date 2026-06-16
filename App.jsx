import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Send, Leaf, Database } from 'lucide-react';

const API_BASE_URL = 'http://localhost:8000';

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Hello! I am AgriGuard-RAG, your Agricultural AI Assistant. Please ask me about crop diseases, and I will consult my knowledge base to help you.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isIngesting, setIsIngesting] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleIngest = async () => {
    setIsIngesting(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/ingest`);
      setMessages(prev => [...prev, {
        role: 'system',
        content: response.data.message || 'Documents ingested successfully.'
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'system',
        content: `Error ingesting documents: ${error.response?.data?.detail || error.message}`
      }]);
    } finally {
      setIsIngesting(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userQuery = input.trim();
    setInput('');
    
    // We get the current messages before adding the new user query to state,
    // so the history sent doesn't include the current query itself.
    const chatHistory = messages
      .filter(m => m.role === 'user' || m.role === 'bot')
      .map(m => ({ role: m.role, content: m.content }));

    setMessages(prev => [...prev, { role: 'user', content: userQuery }]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/query`, { 
        query: userQuery,
        history: chatHistory 
      });
      setMessages(prev => [...prev, { role: 'bot', content: response.data.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: 'Sorry, I encountered an error while processing your request. Ensure the backend is running and documents are ingested.'
      }]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div>
          <h1><Leaf size={28} /> AgriGuard-RAG</h1>
          <p>Context-Aware Agricultural Assistant</p>
        </div>
      </header>

      <main className="chat-area">
        {messages.map((msg, index) => (
          msg.role === 'system' ? (
            <div key={index} className="system-message">
              {msg.content}
            </div>
          ) : (
            <div key={index} className={`message ${msg.role}`}>
              {msg.role === 'bot' ? (
                <div className="formatted-content">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
          )
        ))}
        
        {isLoading && (
          <div className="message bot">
            <div className="typing-indicator">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      <footer className="input-area">
        <form onSubmit={handleSend} className="input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask about a crop disease..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="send-btn" 
            disabled={!input.trim() || isLoading}
          >
            <Send size={20} />
          </button>
        </form>
      </footer>
    </div>
  );
}

export default App;
