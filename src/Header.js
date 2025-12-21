import React from 'react'
import './Header.css'
import DeveloperSVG from './DeveloperSVG'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Header() {
  const handleViewResume = () => {
    window.open('https://drive.google.com/file/d/1tt7oPPlgeITUac9lGfOvSAZRPBAlAA4J/view?usp=sharing', '_blank');
  };

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      icon: <CodeIcon />,
      number: '2+',
      label: 'Years',
      subtitle: 'Experience',
      color: '#6366f1'
    },
    {
      icon: <EmojiEventsIcon />,
      number: '570+',
      label: 'Problems',
      subtitle: 'DSA Expert',
      color: '#f59e0b'
    },
    {
      icon: <RocketLaunchIcon />,
      number: '10+',
      label: 'Projects',
      subtitle: 'Delivered',
      color: '#8b5cf6'
    }
  ];

  const expertise = [
    'Full-stack development with React, Node.js, and Python',
    'RESTful API design and microservices architecture',
    'Database optimization and performance tuning',
    '570+ data structures and algorithms problems solved'
  ];

  const achievements = [
    'Improved system performance by 33%',
    'Reduced development time from 10 days to 2 days (80% faster)',
    'Saved 20+ hours weekly through automation',
    'Enhanced API efficiency by 30%'
  ];

  return (
    <section id="home" className='header-section reveal-on-scroll'>
      <div className='hero-container'>
        {/* Text Content */}
        <div className='hero-content'>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for opportunities</span>
          </div>

          <h1 className='hero-title'>
            <span className='gradient-text'>Software Engineer</span>
          </h1>

          <p className='hero-subtitle'>
            Building scalable, cloud-native backend systems using Python, Java, C/C++, and Linux. 
            Strong foundation in distributed systems, data structures, and SDLC best practices.
          </p>

          {/* CTA Buttons */}
          <div className='hero-actions'>
            <button className='btn-primary' onClick={handleScrollToProjects} aria-label="View my projects">
              View Projects
              <ArrowForwardIcon />
            </button>
            <button className='btn-secondary' onClick={handleViewResume} aria-label="View resume">
              <OpenInNewIcon />
              View Resume
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className='stats-grid-enhanced'>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className='stat-card-enhanced'
                style={{ '--stat-color': stat.color }}
              >
                <div className='stat-icon-wrapper'>
                  {stat.icon}
                </div>
                <div className='stat-content'>
                  <div className='stat-number'>{stat.number}</div>
                  <div className='stat-label'>{stat.label}</div>
                  <div className='stat-subtitle'>{stat.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer SVG Illustration */}
        <div className='hero-image-container'>
          <div className='image-backdrop'></div>
          <div className='svg-wrapper'>
            <DeveloperSVG />
          </div>
          <div className='image-glow'></div>
        </div>
      </div>

      {/* About Sections - Replacing Accordion */}
      <div className='about-sections'>
        {/* About Me Section */}
        <div className='about-section'>
          <h2 className='section-heading'>ABOUT ME</h2>
          <div className='section-divider'></div>
          <p className='section-text'>
            Software Engineer with 2+ years of experience building scalable, cloud-native backend systems using Python, Java, 
            C/C++, and Linux. Strong foundation in data structures, algorithms, object-oriented design, distributed systems, and 
            SDLC best practices. Experienced in owning services end-to-end, collaborating cross-functionally, and delivering reliable 
            systems in agile environments.
          </p>
        </div>

        {/* Expertise Section */}
        <div className='about-section'>
          <h2 className='section-heading'>EXPERTISE</h2>
          <div className='section-divider'></div>
          <ul className='expertise-list'>
            {expertise.map((item, index) => (
              <li key={index}>
                <CheckCircleIcon className='check-icon' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Achievements Section */}
        <div className='about-section'>
          <h2 className='section-heading'>KEY ACHIEVEMENTS</h2>
          <div className='section-divider'></div>
          <ul className='achievements-list'>
            {achievements.map((item, index) => (
              <li key={index}>
                <span className='bullet'>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header
