import React, { useState, useEffect } from 'react';

function Navbar({ logoName }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="logo" onClick={() => setMenuOpen(false)}>
          {logoName}
        </a>
        
        <button 
          className="hamburger-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" className="nav-item" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-item" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-item" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-item" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
