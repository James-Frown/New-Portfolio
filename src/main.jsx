// importing react & react dom
import React from 'react'
import ReactDOM from 'react-dom/client'

// importing app
import App from './App.jsx'

// importing styling
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
