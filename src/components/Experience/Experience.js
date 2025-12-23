import React, { useRef, useState, useEffect } from 'react'
import './Experience.css'
import WorkIcon from '@mui/icons-material/Work';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Experience() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const experiences = [
    {
      id: 1,
      company: 'Reli.',
      position: 'Software Developer',
      period: 'Dec 2024 - Present',
      color: '#6366f1',
      achievements: [
        'Designed, developed, and owned Python-based backend services and automation pipelines deployed on cloud infrastructure, supporting scalable advertising and supply-chain workflows.',
        'Built cloud-native scheduled services using Python, Linux, and Cron to process large datasets, improving system reliability and reducing manual effort by 25%.'
      ]
    },
    {
      id: 2,
      company: 'Bizinc.',
      position: 'Software Developer Intern',
      period: 'Sep 2024 - Dec 2024',
      color: '#10b981',
      achievements: [
        'Improved operational efficiency by 20% by developing data-driven backend solutions aligned with business and technical requirements.',
        'Optimized SQL queries and ETL workflows, reducing data retrieval latency by 18% and improving system reliability.'
      ]
    },
    {
      id: 3,
      company: 'CSULB',
      position: 'Research Assistant',
      period: 'Aug 23 - Dec 23',
      color: '#f59e0b',
      achievements: [
        'Modeled a data-analysis method that enhanced the efficiency of API calls to the GPT model by 30% through the implementation of exploratory data analysis techniques.',
        'Designed a specialized chatbot solution to optimize response time for coursework-related queries, achieving a 15% improvement in efficiency by incorporating the LlamaIndex data framework.'
      ]
    },
    {
      id: 4,
      company: 'CSULB',
      position: 'Student Assistant',
      period: 'Aug 23 - Dec 23',
      color: '#a855f7',
      achievements: [
        'Effectively facilitated student learning by actively engaging with them, providing comprehensive explanations, and resolving their queries pertaining to Data Structures and Algorithms.',
        'Utilized Excel for in-depth analysis of student performance, leading to informed decisions regarding grades and providing personalized guidance to help students enhance their academic standing.'
      ]
    },
    {
      id: 5,
      company: 'MSU, Baroda',
      position: 'Full Stack Dev Intern',
      period: 'Dec 21 - May 22',
      color: '#ec4899',
      achievements: [
        'Achieved a significant 20% reduction in response time by developing REST APIs using AngularJS, resulting in streamlined data entry and retrieval operations within SQL Server.',
        'Resolved server latency issues by shifting from monolithic applications to microservices-based communication, reducing the development time from 10 days to a mere 2 days via an object-oriented design.'
      ]
    },
    {
      id: 6,
      company: 'MSU, Baroda',
      position: 'Software Dev Intern',
      period: 'April 21 - Jul 21',
      color: '#14b8a6',
      achievements: [
        'Built a full-stack web application tailored for faculty needs and requirements, ultimately leading to a notable time savings of 20+ hours per week using MVC architecture.',
        'Spearheaded the automation of invoicing, report generation, and statistical analysis tasks, which led to a remarkable 50% reduction in wait time by optimizing SQL queries.'
      ]
    }
  ];

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const targetScroll = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section id="experience" className='experience-section reveal-on-scroll'>
      <div className='section-header'>
        <h2 className='section-title'>Career Journey</h2>
        <p className='section-subtitle'>
          My professional experience and contributions across various roles
        </p>
      </div>

      <div className='horizontal-timeline-wrapper'>
        {canScrollLeft && (
          <button 
            className='scroll-button scroll-left' 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <ArrowBackIosNewIcon />
          </button>
        )}

        <div className='horizontal-timeline' ref={scrollContainerRef}>
          <div className='timeline-track'>
            {experiences.map((exp, index) => (
              <article 
                key={exp.id} 
                className='experience-card-horizontal'
                style={{ '--accent-color': exp.color }}
              >
                <div className='card-connector' aria-hidden="true">
                  <div className='connector-line'></div>
                  <div className='connector-dot'>
                    <WorkIcon />
                  </div>
                </div>

                <div className='experience-card-content'>
                  <div className='card-top-bar'></div>
                  
                  <div className='experience-header-horizontal'>
                    <div className='experience-title-group'>
                      {exp.company && (
                        <span className='experience-company-horizontal'>{exp.company}</span>
                      )}
                      <h3 className='experience-position-horizontal'>{exp.position}</h3>
                    </div>
                    <time className='experience-period-horizontal'>{exp.period}</time>
                  </div>

                  <ul className='experience-achievements-horizontal'>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>

                  <div className='card-shine' aria-hidden="true"></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {canScrollRight && (
          <button 
            className='scroll-button scroll-right' 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <ArrowForwardIosIcon />
          </button>
        )}
      </div>

      <div className='scroll-hint' aria-hidden="true">
        <span>← Scroll to explore →</span>
      </div>
    </section>
  )
}

export default Experience
