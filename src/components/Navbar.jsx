
import '../styles/Navbar.css';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <a href="#" className="logo">WALEED MONIM</a>
      <button onClick={toggleMenu} className="menu-toggle">
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={isMenuOpen ? 'active' : ''}>
        <a href="#home" className="active">Home</a>
        <a href="#skills" className="active">Skills</a>
        <a href="#education" className="active">Education</a>
        <a href="#experience" className="active">Experience</a>
        <a href="#contact" className="active">Contact</a>
        <a href="https://youtu.be/dnIg01edsXY" className="active">Python Project</a>
      </nav>
    </header>
  );
};

export default Navbar;
