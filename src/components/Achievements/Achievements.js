import React, { useEffect } from 'react'
import './Achievements.css'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import TimerIcon from '@mui/icons-material/Timer';

function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: <TrendingUpIcon />,
      title: '33% Performance Boost',
      description: 'Optimized code-base via agile methods, resulting in a notable 33% system performance improvement',
      color: '#10b981',
      stat: '33%'
    },
    {
      id: 2,
      icon: <SpeedIcon />,
      title: '20% Response Time Reduction',
      description: 'Achieved significant reduction by developing REST APIs using AngularJS',
      color: '#f59e0b',
      stat: '20%'
    },
    {
      id: 3,
      icon: <TimerIcon />,
      title: '20+ Hours Saved Weekly',
      description: 'Built a full-stack web application tailored for faculty needs, saving massive time',
      color: '#6366f1',
      stat: '20+'
    },
    {
      id: 4,
      icon: <CodeIcon />,
      title: '570+ Problems Solved',
      description: 'Extensive track record of solving data structures and algorithmic problems',
      color: '#ec4899',
      stat: '570+'
    },
    {
      id: 5,
      icon: <SpeedIcon />,
      title: '80% Development Time Cut',
      description: 'Reduced development time from 10 days to 2 days via microservices architecture',
      color: '#8b5cf6',
      stat: '80%'
    },
    {
      id: 6,
      icon: <TrendingUpIcon />,
      title: '30% API Efficiency Gain',
      description: 'Enhanced efficiency of API calls to GPT model through data analysis techniques',
      color: '#14b8a6',
      stat: '30%'
    }
  ];

  useEffect(() => {
    const items = document.querySelectorAll('.achievement-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    items.forEach(item => observer.observe(item));
    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <section id="achievements" className='achievements-section reveal-on-scroll'>
      <div className='section-header'>
        <h2 className='section-title'>Key Achievements</h2>
        <p className='section-subtitle'>
          Measurable impact and results delivered across various projects
        </p>
      </div>

      <div className='achievements-grid'>
        {achievements.map((achievement, index) => (
          <article
            key={achievement.id}
            className='achievement-card'
            style={{ 
              '--accent-color': achievement.color,
              '--delay': `${index * 0.1}s`
            }}
          >
            <div className='achievement-icon-wrapper'>
              <div className='achievement-icon'>
                {achievement.icon}
              </div>
              <div className='achievement-glow' aria-hidden="true"></div>
            </div>

            <div className='achievement-content'>
              <div className='achievement-stat'>{achievement.stat}</div>
              <h3 className='achievement-title'>{achievement.title}</h3>
              <p className='achievement-description'>{achievement.description}</p>
            </div>

            <div className='achievement-badge' aria-hidden="true">
              <EmojiEventsIcon />
            </div>
          </article>
        ))}
      </div>

      {/* Stats Summary */}
      <div className='achievements-summary'>
        <div className='summary-item'>
          <span className='summary-icon'><CodeIcon /></span>
          <div className='summary-content'>
            <span className='summary-number'>1.5+</span>
            <span className='summary-label'>Years Professional Experience</span>
          </div>
        </div>

        <div className='summary-item'>
          <span className='summary-icon'><GroupsIcon /></span>
          <div className='summary-content'>
            <span className='summary-number'>6+</span>
            <span className='summary-label'>Roles & Positions</span>
          </div>
        </div>

        <div className='summary-item'>
          <span className='summary-icon'><EmojiEventsIcon /></span>
          <div className='summary-content'>
            <span className='summary-number'>10+</span>
            <span className='summary-label'>Projects Delivered</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

