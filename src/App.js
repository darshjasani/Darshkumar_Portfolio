import React, { useEffect, useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Loader from './components/Loader/Loader'
import Header from './components/Header/Header';
import Navbar  from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import './styles/App.css'

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // Loader effect - reduced to 2 seconds for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  // Custom cursor trailer effect
  useEffect(() => {
    if (showLoader) return;
    
    const trailer = document.getElementById("trailer");
    if (!trailer) return;
    
    const handleMouseMove = (e) => {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px)`
      };

      trailer.animate(keyframes, {
        duration: 600,
        fill: "forwards"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showLoader]);

  // Smooth scroll reveal animations
  useEffect(() => {
    if (showLoader) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [showLoader]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (showLoader) {
    return <Loader />;
  }

  return (
    <ErrorBoundary>
      {/* Animated Background */}
      <div className="app-background" aria-hidden="true"></div>

      {/* Custom Cursor Trailer */}
      <div id='trailer' aria-hidden="true">
        <div id="circle"></div>
      </div>

      {/* Main Content */}
      <div className="page-transition">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Header />
          <Experience />
          <Projects />
          <Achievements />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App