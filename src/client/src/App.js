import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Parents from './pages/Parents';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header app-shell">
          <div className="brand">
            <span className="logo">🏫</span>
            <span className="brand-text">Adarsh Public School</span>
          </div>
          <nav className="navBar">
            <div className="navLeft">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/parents">Parents</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="navRight">
              <Link className="btn-signup" to="/login">Sign Up</Link>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <footer className="footer">
          <div>© 2026 Adarsh Public School.</div>
          <div className="whatsapp-contact">
            📱 WhatsApp: <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">123456789</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
