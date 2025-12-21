import React from 'react'
import './Footer.css';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  const email = 'darshkumar.jasani@gmail.com';
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      url: 'https://github.com/darshjasani'
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/darsh-jasani/'
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      url: `mailto:${email}`
    }
  ];

  const quickLinks = [
    { label: 'Home', url: '#home' },
    { label: 'Experience', url: '#experience' },
    { label: 'Projects', url: '#projects' },
    { label: 'Achievements', url: '#achievements' },
    { label: 'Skills', url: '#skills' },
    { label: 'Contact', url: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <div className='footer-content'>
        {/* Footer Top */}
        <div className='footer-top'>
          <div className='footer-brand'>
            <div className='brand-logo'>
              <CircleIcon />
              <span>Darshkumar Jasani</span>
            </div>
            <p className='brand-tagline'>
              Crafting exceptional digital experiences with passion and precision
            </p>
          </div>

          <div className='footer-links-section'>
            <h3 className='footer-heading'>Quick Links</h3>
            <nav className='footer-nav' aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className='footer-link'
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.url)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className='footer-social-section'>
            <h3 className='footer-heading'>Connect</h3>
            <div className='footer-social'>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className='social-icon'
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a 
              href={`mailto:${email}`} 
              className='footer-email'
              aria-label="Send email"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Footer Divider */}
        <div className='footer-divider'></div>

        {/* Footer Bottom */}
        <div className='footer-bottom'>
          <div className='footer-copyright'>
            <span>&copy; {currentYear} Darshkumar Jasani.</span>
            <span className='copyright-text'>All rights reserved.</span>
          </div>

          <div className='footer-credits'>
            <span>Made with</span>
            <FavoriteIcon className='heart-icon' />
            <span>and React</span>
          </div>

          <div className='footer-location'>
            <span>Based in California, USA 🌴</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className='scroll-to-top'
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUpwardIcon />
      </button>
    </footer>
  )
}

export default Footer
