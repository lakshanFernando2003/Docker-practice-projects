import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add this for debugging
console.log('Environment variables:');
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
