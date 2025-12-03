import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ColorMixer from './cl.jsx'
import './app.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
