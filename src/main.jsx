import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header2 from './components/Header/Header2/Header2.jsx'
import Header1 from './components/Header/Header1/Header1.jsx'
import Login from './components/Login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header1 />
    <Header2 />
    <Login />
    <App />
  </StrictMode>,
);
