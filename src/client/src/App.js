import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Parents from './pages/Parents';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/aps-sundernagar">
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
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <a
          href="https://wa.me/917879755661"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-floating-btn"
          title="Chat with us on WhatsApp"
        >
          <img src={require('./images/3d-whatsapp-logo-icon-green-color-free.png')} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
