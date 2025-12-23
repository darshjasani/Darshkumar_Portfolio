import React, { useEffect } from 'react'
import './Achievements.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import CodeIcon from '@mui/icons-material/Code';
import TimerIcon from '@mui/icons-material/Timer';

function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: <TrendingUpIcon />,
      title: 'Performance Boost',
      description: 'Optimized code-base via agile methods, resulting in a notable 33% system performance improvement',
      color: '#10b981',
      stat: '33%',
      size: 'large',
      position: 'top-left'
    },
    {
      id: 2,
      icon: <SpeedIcon />,
      title: 'Response Time Reduction',
      description: 'Achieved significant reduction by developing REST APIs using AngularJS',
      color: '#f59e0b',
      stat: '20%',
      size: 'medium',
      position: 'top-right'
    },
    {
      id: 3,
      icon: <TimerIcon />,
      title: 'Hours Saved Weekly',
      description: 'Built a full-stack web application tailored for faculty needs, saving massive time',
      color: '#6366f1',
      stat: '20+',
      size: 'medium',
      position: 'middle-left'
    },
    {
      id: 4,
      icon: <CodeIcon />,
      title: 'Problems Solved',
      description: 'Extensive track record of solving data structures and algorithmic problems',
      color: '#ec4899',
      stat: '570+',
      size: 'large',
      position: 'middle-right'
    },
    {
      id: 5,
      icon: <SpeedIcon />,
      title: 'Development Time Cut',
      description: 'Reduced development time from 10 days to 2 days via microservices architecture',
      color: '#8b5cf6',
      stat: '80%',
      size: 'medium',
      position: 'bottom-left'
    },
    {
      id: 6,
      icon: <TrendingUpIcon />,
      title: 'API Efficiency Gain',
      description: 'Enhanced efficiency of API calls to GPT model through data analysis techniques',
      color: '#14b8a6',
      stat: '30%',
      size: 'medium',
      position: 'bottom-right'
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
    
    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="achievements" className='achievements-section reveal-on-scroll'>
      {/* Animated Background Layers */}
      <div className='animated-background' aria-hidden="true">
        {/* Floating Particles */}
        <div className='particles'>
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className='particle'
              style={{
                '--particle-delay': `${i * 0.2}s`,
                '--particle-duration': `${8 + (i % 6)}s`,
                '--particle-x': `${(i * 11) % 100}%`,
                '--particle-y': `${(i * 17) % 100}%`
              }}
            ></div>
          ))}
        </div>

        {/* Orbiting Elements */}
        <div className='orbits'>
          <div className='orbit orbit-1'></div>
          <div className='orbit orbit-2'></div>
          <div className='orbit orbit-3'></div>
        </div>
      </div>

      <div className='section-header'>
        <h2 className='section-title'>Key Achievements</h2>
        <p className='section-subtitle'>
          Measurable impact and results delivered across various projects
        </p>
      </div>

      <div className='achievements-container'>
        <div className='achievements-floating-layout'>
          {achievements.map((achievement, index) => (
            <article
              key={achievement.id}
              className={`achievement-card ${achievement.size} ${achievement.position}`}
              style={{ 
                '--accent-color': achievement.color,
                '--delay': `${index * 0.15}s`,
                '--float-delay': `${index * 0.3}s`
              }}
            >
              <div className='card-background-effect'></div>
              
              <div className='achievement-icon-wrapper'>
                <div className='achievement-icon'>
                  {achievement.icon}
                </div>
                <div className='achievement-glow' aria-hidden="true"></div>
              </div>

              <div className='achievement-content'>
                <div className='achievement-stat'>
                  {achievement.stat}
                </div>
                <h3 className='achievement-title'>{achievement.title}</h3>
                <p className='achievement-description'>{achievement.description}</p>
              </div>

              <div className='card-shine' aria-hidden="true"></div>
            </article>
          ))}
        </div>

        {/* Decorative elements */}
        <div className='floating-shapes' aria-hidden="true">
          <div className='shape shape-1'></div>
          <div className='shape shape-2'></div>
          <div className='shape shape-3'></div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

