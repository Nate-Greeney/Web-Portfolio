import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Honeybadger, HoneybadgerErrorBoundary } from '@honeybadger-io/react'
import App from './App.jsx'

const honeybadger = Honeybadger.configure({
  apiKey: 'hbp_7omdIoGUP6BGDMg5T4ZFXl39wEYGa04e6GEw',
  environment: import.meta.env.MODE || 'development'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <HoneybadgerErrorBoundary honeybadger={honeybadger}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HoneybadgerErrorBoundary>
)
