import React from 'react'
import './NotFound.css'
import SearchOffIcon from '@mui/icons-material/SearchOff';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NotFound() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className='not-found-container'>
      <div className='not-found-content'>
        {/* Animated 404 */}
        <div className='not-found-number'>
          <span className='number-4'>4</span>
          <span className='number-0'>
            <SearchOffIcon className='search-icon' />
          </span>
          <span className='number-4'>4</span>
        </div>

        {/* Text Content */}
        <h1 className='not-found-title'>Page Not Found</h1>
        <p className='not-found-message'>
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track!
        </p>

        {/* Actions */}
        <div className='not-found-actions'>
          <button 
            className='not-found-btn primary' 
            onClick={handleGoHome}
            aria-label="Go to home page"
          >
            <HomeIcon />
            <span>Go to Home</span>
          </button>
          <button 
            className='not-found-btn secondary' 
            onClick={handleGoBack}
            aria-label="Go back to previous page"
          >
            <ArrowBackIcon />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className='quick-links'>
          <p className='quick-links-title'>Quick Links:</p>
          <div className='quick-links-list'>
            <a href="/#home">Home</a>
            <a href="/#experience">Experience</a>
            <a href="/#projects">Projects</a>
            <a href="/#skills">Skills</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className='floating-shapes' aria-hidden="true">
          <div className='shape shape-1'></div>
          <div className='shape shape-2'></div>
          <div className='shape shape-3'></div>
        </div>
      </div>
    </div>
  )
}

export default NotFound

