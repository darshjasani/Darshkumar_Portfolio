import React, { useEffect, useState } from 'react'
import './Header.css'
import CircleIcon from '@mui/icons-material/Circle';

function Header() {
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 750); // 1 second delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <>
      <div id="home">
        

          <div className='head_name'>
            HEY, I'M DARSHKUMAR JASANI
          </div>

          <div className='head_desc'>
          Software Engineer | Open Source Contributor | Cloud Enthusiastic
          </div>
          
          <div class="first-component">
            <div class="social-links">
              <a href="https://www.linkedin.com/in/darsh-jasani" target="_blank" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/darshjasani" target="_blank" class="social-icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:darshkumar.jasani@gmail.com" class="social-icon">
                <i class="fas fa-envelope"></i>
              </a>

              <a href="mailto:darshkumar.jasani@gmail.com" class="social-icon icon-container">
                <div class="icon">
                
                <i class="fas fa-comment"></i>
                {showNotification && <span className="notification">1</span>}
                </div>
                <span class="tooltip-text">I'm software engineer with over 1.5 years of experience in full-stack development, project management, and customer engagement. Passionate about building pixel-perfect, engaging, and accessible digital experiences that drive business success.</span>
              </a>
            </div>
          </div>

          <div class="scroll-indicator">
            <div class="scroll"></div>
          </div>
      </div>
    </>
  )
}

export default Header