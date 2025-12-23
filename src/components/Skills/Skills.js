import React, { useState } from 'react'
import './Skills.css'
import htmlImg from '../../assets/images/skills/html.png'
import cssImg from '../../assets/images/skills/css.png'
import jsImg from '../../assets/images/skills/js.png'
import nodejsImg from '../../assets/images/skills/nodejs.png'
import reactjsImg from '../../assets/images/skills/reactjs-1.jpg'
import djangoImg from '../../assets/images/skills/django.png'
import gitImg from '../../assets/images/skills/git.jpg'
import firebaseImg from '../../assets/images/skills/firebase.jpg'
import javaImg from '../../assets/images/skills/java.jpg'
import cImg from '../../assets/images/skills/c.png'
import pythonImg from '../../assets/images/skills/python.jpg'
import sqlImg from '../../assets/images/skills/sql.jpg'
import postgreImg from '../../assets/images/skills/postgres.jpg'
import postmanImg from '../../assets/images/skills/postman.jpg'
import mdbImg from '../../assets/images/skills/mongodb.jpg'
import pandasImg from '../../assets/images/skills/pandas.jpg'
import tfImg from '../../assets/images/skills/tensorflow.jpg'

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skills = [
    { name: 'HTML', img: htmlImg, category: 'Frontend', level: 95 },
    { name: 'CSS', img: cssImg, category: 'Frontend', level: 90 },
    { name: 'JavaScript', img: jsImg, category: 'Frontend', level: 88 },
    { name: 'Node.js', img: nodejsImg, category: 'Backend', level: 85 },
    { name: 'React.js', img: reactjsImg, category: 'Frontend', level: 90 },
    { name: 'Django', img: djangoImg, category: 'Backend', level: 80 },
    { name: 'Git/GitHub', img: gitImg, category: 'Tools', level: 90 },
    { name: 'Firebase', img: firebaseImg, category: 'Backend', level: 82 },
    { name: 'Java', img: javaImg, category: 'Languages', level: 88 },
    { name: 'C', img: cImg, category: 'Languages', level: 85 },
    { name: 'Python', img: pythonImg, category: 'Languages', level: 90 },
    { name: 'SQL', img: sqlImg, category: 'Database', level: 87 },
    { name: 'PostgreSQL', img: postgreImg, category: 'Database', level: 85 },
    { name: 'MongoDB', img: mdbImg, category: 'Database', level: 83 },
    { name: 'Tensorflow', img: tfImg, category: 'Data Science', level: 75 },
    { name: 'Pandas', img: pandasImg, category: 'Data Science', level: 80 }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Languages', 'Database', 'Tools', 'Data Science'];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className='skills-section reveal-on-scroll'>
      <div className='section-header'>
        <h2 className='section-title'>Technologies & Tools</h2>
        <p className='section-subtitle'>
          Here are the technologies I work with to bring ideas to life
        </p>
      </div>

      {/* Category Filter */}
      <div className='category-filter' role="tablist" aria-label="Filter skills by category">
        {categories.map((category, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="skills-grid"
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            <span className='filter-count'>
              {category === 'All' ? skills.length : skills.filter(s => s.category === category).length}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div id="skills-grid" className='skills-grid' role="tabpanel">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className='skill-card'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className='skill-icon-wrapper'>
              <img 
                src={skill.img} 
                className='skill-icon' 
                alt={`${skill.name} icon`}
                loading="lazy"
              />
              <div className='skill-glow'></div>
            </div>
            
            <h3 className='skill-name'>{skill.name}</h3>
            
            <div className='skill-progress'>
              <div className='progress-bar-container'>
                <div 
                  className='progress-bar' 
                  style={{ '--progress': `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${skill.name} proficiency: ${skill.level}%`}
                >
                  <span className='progress-text'>{skill.level}%</span>
                </div>
              </div>
            </div>
            
            <span className='skill-category'>{skill.category}</span>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className='skills-summary'>
        <div className='summary-card'>
          <span className='summary-number'>{skills.length}+</span>
          <span className='summary-label'>Technologies</span>
        </div>
        <div className='summary-card'>
          <span className='summary-number'>570+</span>
          <span className='summary-label'>Problems Solved</span>
        </div>
        <div className='summary-card'>
          <span className='summary-number'>1.5+</span>
          <span className='summary-label'>Years Experience</span>
        </div>
      </div>
    </section>
  )
}

export default Skills
