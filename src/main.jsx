import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './views/Home.jsx'
import Contacto from './views/Contacto.jsx'
import NotFound from './views/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
