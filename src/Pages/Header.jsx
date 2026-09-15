import { useState } from 'react';
import aegisLogo from './assets/aegis-logo-transparent.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="https://aegiscoworking.ae" className="logo-link" onClick={closeMenu}>
        <div className="logo">
          <img
            src={aegisLogo}
            alt="Aegis Coworking"
            className="logo-img"
            width="1254"
            height="1254"
            decoding="async"
          />
          AEGIS <span className="logo-accent">COWORKING</span>
        </div>
      </a>

      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <li>
          <a href="#services" onClick={closeMenu}>Services</a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>
        <li className="nav-mobile-cta">
          <a href="https://aegiscoworking.ae" onClick={closeMenu}>
            <button className="btn-primary">VISIT AEGIS COWORKING</button>
          </a>
        </li>
      </ul>

      <a href="https://aegiscoworking.ae" className="nav-desktop-cta">
        <button className="btn-primary">VISIT AEGIS COWORKING</button>
      </a>

      <button
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Header;
