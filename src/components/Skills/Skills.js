import React, { useState, useEffect } from 'react'
import './Skills.css'

function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // HD Logo URLs from CDN (Simple Icons & DevIcons)
  const skills = [
    // Programming Languages
    { 
      id: 1, 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB'
    },
    { 
      id: 2, 
      name: 'Java', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#007396'
    },
    { 
      id: 3, 
      name: 'C++', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      color: '#00599C'
    },
    { 
      id: 4, 
      name: 'C', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      color: '#A8B9CC'
    },
    { 
      id: 5, 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E'
    },
    { 
      id: 6, 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178C6'
    },
    
    // Frontend Frameworks
    { 
      id: 7, 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    
    // Backend Frameworks
    { 
      id: 8, 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    { 
      id: 9, 
      name: 'Express.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#68A063'
    },
    { 
      id: 10, 
      name: 'Django', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      color: '#092E20'
    },
    { 
      id: 11, 
      name: 'FastAPI', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      color: '#009688'
    },
    { 
      id: 12, 
      name: 'Spring Boot', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: '#6DB33F'
    },
    
    // Testing
    { 
      id: 13, 
      name: 'Pytest', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg',
      color: '#0A9EDC'
    },
    
    // Cloud & DevOps
    { 
      id: 14, 
      name: 'AWS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      color: '#FF9900'
    },
    { 
      id: 15, 
      name: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ED'
    },
    { 
      id: 16, 
      name: 'Kubernetes', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      color: '#326CE5'
    },
    { 
      id: 17, 
      name: 'Terraform', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      color: '#7B42BC'
    },
    { 
      id: 18, 
      name: 'DigitalOcean', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
      color: '#0080FF'
    },
    
    // Databases
    { 
      id: 19, 
      name: 'MySQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479A1'
    },
    { 
      id: 20, 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248'
    },
    { 
      id: 21, 
      name: 'Redis', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: '#DC382D'
    },
    { 
      id: 22, 
      name: 'Firebase', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      color: '#FFCA28'
    },
    
    // Tools
    { 
      id: 24, 
      name: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032'
    },
    { 
      id: 25, 
      name: 'GitHub', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717'
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="skills" className='skills-section-new'>
      {/* Animated Background */}
      <div className='skills-bg-animation'>
        <div className='bg-orb orb-1' style={{ transform: `translate(${mousePosition.x * 0.02}%, ${mousePosition.y * 0.02}%)` }}></div>
        <div className='bg-orb orb-2' style={{ transform: `translate(${mousePosition.x * -0.015}%, ${mousePosition.y * -0.015}%)` }}></div>
        <div className='bg-orb orb-3' style={{ transform: `translate(${mousePosition.x * 0.025}%, ${mousePosition.y * -0.02}%)` }}></div>
      </div>

      {/* Section Header */}
      <div className='section-header'>
        <h2 className='section-title'>Technologies & Tools</h2>
        <p className='section-subtitle'>
          Crafting digital experiences with cutting-edge technologies
        </p>
      </div>

      {/* Logo Display Grid */}
      <div className='skills-logo-grid'>
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className='logo-item'
            style={{
              '--delay': `${index * 0.08}s`,
              '--skill-color': skill.color
            }}
          >
            <div className='logo-glow'></div>
            <img 
              src={skill.logo} 
              alt={skill.name}
              className='skill-logo'
            />
            <span className='logo-name'>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className='floating-elements'>
        <div className='float-element element-1'>💻</div>
        <div className='float-element element-2'>🎯</div>
        <div className='float-element element-3'>✨</div>
        <div className='float-element element-4'>🔥</div>
      </div>
    </section>
  )
}

export default Skills
