import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='loader-container'>
      <div className='loader-content'>
        {/* Animated Logo */}
        <div className='loader-logo'>
          <div className='logo-circle'></div>
          <div className='logo-text'>DJ</div>
        </div>

        {/* Loading Text */}
        <div className='loader-text'>
          <span>Loading</span>
          <div className='loader-dots'>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='loader-progress'>
          <div className='progress-fill'></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
