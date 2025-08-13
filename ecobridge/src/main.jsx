import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {BrowserRouter, Routes, Route, Link}from "react-router-dom";
import App from './App.jsx'


const style ={
    nav: {
    backgroundColor: '#333',
    padding: '1rem'
  },
  link: {
    color: 'white',
    marginRight: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  content: {
    padding: '2rem'
  }
};
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     
             <nav style={style.nav}>
                 <Link to="/about" style={style.link}> About </Link>
                <Link to="/login" style={style.link}> Login</Link>
                <Link to="/signup" style={style.link}> SignUp</Link> 
            </nav>
            <div style={style.content}>
                <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        
    </BrowserRouter>
  </StrictMode>,
)
