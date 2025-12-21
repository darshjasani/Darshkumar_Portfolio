import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import DeveloperSVG from './DeveloperSVG'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

function Header() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Animation triggers every time section becomes visible
          setIsAboutVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);
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
              View Resume
              <OpenInNewIcon />
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

      {/* About Section - Two Column with Scroll Animation */}
      <div className='about-sections' ref={aboutSectionRef}>
        <div className='about-section-scroll'>
          <div className='about-header-scroll'>
            <h2 className='section-heading-scroll'>ABOUT ME</h2>
            <div className='section-divider-scroll'></div>
          </div>
          
          <div className='about-two-column-grid'>
            {/* Left Side - About Text */}
            <div className={`about-left-content ${isAboutVisible ? 'slide-in-left' : ''}`}>
              <p className='about-full-text'>
                Software Engineer with 2+ years of experience building scalable, cloud-native backend systems using Python, Java, C/C++, and Linux. Strong foundation in data structures, algorithms, object-oriented design, distributed systems, and SDLC best practices. Experienced in owning services end-to-end, collaborating cross-functionally, and delivering reliable systems in agile environments.
              </p>
              
              {/* Highlight Cards */}
              <div className='about-highlights'>
                <div className='highlight-card'>
                  <div className='highlight-icon'>
                    <WorkspacePremiumIcon />
                  </div>
                  <div className='highlight-content'>
                    <h4>Quality First</h4>
                    <p>Clean, maintainable code with comprehensive testing</p>
                  </div>
                </div>
                
                <div className='highlight-card'>
                  <div className='highlight-icon'>
                    <TrendingUpIcon />
                  </div>
                  <div className='highlight-content'>
                    <h4>Performance Driven</h4>
                    <p>Optimized systems for scale and efficiency</p>
                  </div>
                </div>
                
                <div className='highlight-card'>
                  <div className='highlight-icon'>
                    <EmojiObjectsIcon />
                  </div>
                  <div className='highlight-content'>
                    <h4>Problem Solver</h4>
                    <p>Creative solutions to complex technical challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Expertise with Green Checkmarks */}
            <div className={`about-right-content ${isAboutVisible ? 'slide-in-right' : ''}`}>
              <ul className='expertise-list-scroll'>
                {expertise.map((item, index) => (
                  <li key={index} className='expertise-item-scroll'>
                    <CheckCircleIcon className='check-icon-green' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
