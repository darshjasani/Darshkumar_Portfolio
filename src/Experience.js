import React from 'react'
import './Experience.css'
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  const experiences = [
    {
      id: 1,
      position: 'Research Assistant',
      period: 'Aug 23 - Dec 23',
      color: '#6366f1',
      achievements: [
        'Modeled a data-analysis method that enhanced the efficiency of API calls to the GPT model by 30% through the implementation of exploratory data analysis techniques.',
        'Designed a specialized chatbot solution to optimize response time for coursework-related queries, achieving a 15% improvement in efficiency by incorporating the LlamaIndex data framework.'
      ]
    },
    {
      id: 2,
      position: 'Student Assistant',
      period: 'Aug 23 - Dec 23',
      color: '#10b981',
      achievements: [
        'Effectively facilitated student learning by actively engaging with them, providing comprehensive explanations, and resolving their queries pertaining to Data Structures and Algorithms.',
        'Utilized Excel for in-depth analysis of student performance, leading to informed decisions regarding grades and providing personalized guidance to help students enhance their academic standing.'
      ]
    },
    {
      id: 3,
      position: 'Full Stack Dev Intern',
      period: 'Dec 21 - May 22',
      color: '#f59e0b',
      achievements: [
        'Achieved a significant 20% reduction in response time by developing REST APIs using AngularJS, resulting in streamlined data entry and retrieval operations within SQL Server.',
        'Resolved server latency issues by shifting from monolithic applications to microservices-based communication, reducing the development time from 10 days to a mere 2 days via an object-oriented design.'
      ]
    },
    {
      id: 4,
      position: 'Software Dev Intern',
      period: 'April 21 - Jul 21',
      color: '#a855f7',
      achievements: [
        'Built a full-stack web application tailored for faculty needs and requirements, ultimately leading to a notable time savings of 20+ hours per week using MVC architecture.',
        'Spearheaded the automation of invoicing, report generation, and statistical analysis tasks, which led to a remarkable 50% reduction in wait time by optimizing SQL queries.'
      ]
    },
    {
      id: 5,
      position: 'Business Analytics',
      period: 'Jan 21 - Feb 21',
      color: '#ec4899',
      achievements: [
        'Developed and tailored the front-end of an application to meet specific client requirements, while also contributing enhancements and additional features to align with their evolving needs.',
        'Gained practical skills in front-end development by working on a real-world project, utilizing technologies like ReactJS, NodeJS, HTML/CSS, and other tools to meet specific client needs.'
      ]
    },
    {
      id: 6,
      position: 'Volunteer',
      period: 'May 19 - Dec 20',
      color: '#14b8a6',
      achievements: [
        'Refined my organizational, negotiation, teamwork, and event management skills, enriching my capabilities and deepening my understanding of orchestrating large-scale events effectively.',
        'Engaging in multifaceted tasks such as event design, sponsor acquisition, and promotional outreach across multiple colleges, which significantly expanded both my skill repertoire and professional network.'
      ]
    }
  ];

  return (
    <section id="experience" className='experience-section reveal-on-scroll'>
      <div className='section-header'>
        <h2 className='section-title'>Career Journey</h2>
        <p className='section-subtitle'>
          My professional experience and contributions across various roles
        </p>
      </div>

      <div className='timeline-container'>
        <div className='timeline-line' aria-hidden="true"></div>
        
        {experiences.map((exp, index) => (
          <article 
            key={exp.id} 
            className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ '--accent-color': exp.color }}
          >
            <div className='experience-marker' aria-hidden="true">
              <WorkIcon />
            </div>

            <div className='experience-content'>
              <div className='experience-header'>
                <h3 className='experience-position'>{exp.position}</h3>
                <time className='experience-period'>{exp.period}</time>
              </div>

              <ul className='experience-achievements'>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>

              <div className='experience-glow' aria-hidden="true"></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
