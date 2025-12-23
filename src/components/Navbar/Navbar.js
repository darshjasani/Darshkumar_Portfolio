import React, { useEffect, useState } from 'react'
import './Navbar.css'
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function Navbar({ darkMode, toggleDarkMode }) {
  const [display, setDisplay] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const clickBtn = () => {
    window.open('https://www.linkedin.com/in/darsh-jasani/', '_blank', 'noopener,noreferrer');
    setDisplay(false);
  };

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (display) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [display]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-content">
        {/* Logo */}
        <div className='logo'>
          <a href="#home" aria-label="Go to home">
            <span className='logo-text'>Darshkumar Jasani</span>
            <span className='logo-accent'>.</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${display ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                onClick={() => setDisplay(false)}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
          
          {/* Hire Me Button (mobile only in menu) */}
          <li className="mobile-cta">
            <button className="hireMe-btn" onClick={clickBtn} aria-label="Connect on LinkedIn">
              <RocketLaunchIcon />
              <span>Hire Me!</span>
            </button>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {/* Dark Mode Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>

          {/* Hire Me Button (desktop) */}
          <button className="hireMe-btn desktop-only" onClick={clickBtn} aria-label="Connect on LinkedIn">
            <RocketLaunchIcon />
            <span>Hire Me!</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle ${display ? 'active' : ''}`}
            onClick={() => setDisplay(!display)}
            aria-label={display ? 'Close menu' : 'Open menu'}
            aria-expanded={display}
            aria-controls="mobile-menu"
          >
            {!display ? <SortIcon /> : <CloseIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {display && (
        <div 
          className="menu-overlay" 
          onClick={() => setDisplay(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

export default Navbar
