import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">LVR</div>

      {/* DESKTOP NAV */}
      <nav className="nav desktop-nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#freelance">Freelance</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* THEME TOGGLE */}
      <button className="theme-toggle" onClick={onToggleTheme}>
        {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* HAMBURGER BUTTON (MOBILE) */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* MOBILE NAV MENU */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
          <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setMenuOpen(false)} href="#freelance">Freelance</a>
          <a onClick={() => setMenuOpen(false)} href="#about">About</a>
          <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
