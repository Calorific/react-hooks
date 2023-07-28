import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './app/App'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals()
