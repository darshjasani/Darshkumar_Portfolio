import React, { useEffect, useState } from 'react'
import './Projects.css';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import chatimg from '../../assets/images/projects/chatapp.png'
import weatherimg from '../../assets/images/projects/weather.png'
import movieimg from '../../assets/images/projects/MovieRecom.jpeg'
import bugimg from '../../assets/images/projects/Bughound.png'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Chat Application',
      image: chatimg,
      description: 'A feature-rich real-time chat application with Google authentication, infinite scroll, room creation, profile customization, and secure login functionality.',
      longDescription: 'A comprehensive real-time chat application built with ReactJS and Firebase. Features include Google OAuth authentication, real-time message synchronization, infinite scrolling for chat history, dynamic room creation and management, customizable user profiles, and secure authentication flow. The app utilizes Firebase Realtime Database for instant message delivery and Cloud Storage for media files.',
      technologies: ['React.js', 'Firebase', 'Google Auth', 'Real-time DB'],
      github: 'https://github.com/darshjasani/ChatHub',
      demo: 'https://github.com/darshjasani/ChatHub',
      features: ['Real-time messaging', 'Room creation', 'Google authentication', 'Profile customization'],
      category: 'Web Development',
      featured: true
    },
    {
      id: 2,
      title: 'Bughound Bug Tracking',
      image: bugimg,
      description: 'Secure, web-based bug recording and tracking software designed for testing and verifying product functionality.',
      longDescription: 'Bughound is a comprehensive bug tracking system designed for software development teams. It provides a streamlined workflow for reporting, tracking, and resolving bugs throughout the development lifecycle. The system includes role-based access control, customizable bug statuses, assignment management, and detailed reporting features.',
      technologies: ['Django', 'PostgreSQL', 'Python', 'Bootstrap'],
      github: 'https://github.com/darshjasani/BugHound',
      demo: 'https://github.com/darshjasani/BugHound',
      features: ['Bug tracking', 'Role-based access', 'Custom workflows', 'Reporting dashboard'],
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      image: weatherimg,
      description: 'Seamless integration of OpenWeatherMap API within a React application, showcasing real-time weather data for any location across the globe.',
      longDescription: 'A modern weather forecasting application that provides real-time weather information for locations worldwide. The app features a clean, intuitive interface with detailed weather metrics including temperature, humidity, wind speed, and 5-day forecasts. Built with React and styled with custom CSS for a responsive, mobile-first experience.',
      technologies: ['React.js', 'OpenWeatherMap API', 'CSS3', 'Axios'],
      github: 'https://github.com/darshjasani/WeatherWebApp',
      demo: 'https://github.com/darshjasani/WeatherWebApp',
      features: ['Real-time weather', 'Global search', '5-day forecast', 'Responsive design'],
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Movie Recommendation Model',
      image: movieimg,
      description: 'Machine learning project focusing on collaborative filtering to recommend movies, with parameter optimization through gradient descent.',
      longDescription: 'An intelligent movie recommendation system built using collaborative filtering techniques. The model analyzes user ratings and preferences to generate personalized movie recommendations. Implemented using gradient descent optimization for parameter tuning and validated using numerical gradients. The system processes a comprehensive dataset of user ratings ranging from 1 to 5 stars.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/darshjasani/Movie-Recommender',
      demo: 'https://github.com/darshjasani/Movie-Recommender',
      features: ['Collaborative filtering', 'Gradient descent', 'Rating prediction', 'User preferences'],
      category: 'Machine Learning'
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const categories = ['All', 'Web Development', 'Machine Learning'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = filteredProjects.find(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  useEffect(() => {
    const items = document.querySelectorAll('.fadeOut');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview2');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    items.forEach(item => observer.observe(item));
    return () => items.forEach(item => observer.unobserve(item));
  }, [activeFilter, filteredProjects]);

  return (
    <section id="projects" className='projects-section reveal-on-scroll'>
      <div className='section-header'>
        <h2 className='section-title'>Projects</h2>
        <p className='section-subtitle'>
          Full-stack applications and intelligent systems
        </p>
      </div>

      {/* Filter Tabs */}
      <div className='filter-tabs'>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-tab ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <article className='featured-project fadeOut'>
          <div className='featured-grid'>
            <div className='featured-image-wrapper'>
              <img 
                src={featuredProject.image} 
                alt={`${featuredProject.title} preview`}
                className='featured-image'
                loading="lazy"
              />
              <div className='featured-badge'>
                <StarIcon className='badge-icon' />
                <span>Featured Project</span>
              </div>
              <div className='featured-overlay'>
                <div className='overlay-content'>
                  <TrendingUpIcon className='trending-icon' />
                  <p>Most Popular</p>
                </div>
              </div>
            </div>
            
            <div className='featured-content'>
              <div className='featured-header'>
                <div className='featured-category-badge'>
                  <span className='category-dot'></span>
                  {featuredProject.category}
                </div>
              </div>

              <h3 className='featured-title'>
                {featuredProject.title}
              </h3>
              
              <p className='featured-description'>{featuredProject.longDescription}</p>
              
              <div className='featured-highlights'>
                <h4 className='highlights-title'>Key Features</h4>
                <div className='highlights-grid'>
                  {featuredProject.features.map((feature, idx) => (
                    <div key={idx} className='highlight-item'>
                      <div className='highlight-icon'>✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='featured-tech-section'>
                <h4 className='tech-title'>Built With</h4>
                <div className='featured-tech'>
                  {featuredProject.technologies.map((tech, idx) => (
                    <span key={idx} className='tech-tag featured-tech-tag'>
                      <span className='tech-dot'></span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='featured-actions'>
                <a
                  href={featuredProject.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='featured-btn secondary'
                  aria-label={`View ${featuredProject.title} on GitHub`}
                >
                  <GitHubIcon />
                  <span>View Code</span>
                </a>
                <a
                  href={featuredProject.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='featured-btn primary'
                  aria-label={`View ${featuredProject.title} live demo`}
                >
                  <LaunchIcon />
                  <span>Live Demo</span>
                  <span className='btn-shine'></span>
                </a>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Regular Projects Grid */}
      {regularProjects.length > 0 && (
        <>
          <h3 className='subsection-title fadeOut'>More Projects</h3>
          <div className='projects-grid'>
            {regularProjects.map((project, index) => (
          <article 
            key={project.id} 
            className='project-card fadeOut'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className='project-image-wrapper'>
              <img 
                src={project.image} 
                alt={`${project.title} preview`}
                className='project-image'
                loading="lazy"
              />
              <div className='project-overlay'>
                <button 
                  className='view-details-btn'
                  onClick={() => openProject(project)}
                  aria-label={`View details for ${project.title}`}
                >
                  View Details
                </button>
              </div>
            </div>

            <div className='project-content'>
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-description'>{project.description}</p>
              
              <div className='project-tech'>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className='tech-tag'>{tech}</span>
                ))}
              </div>

              <div className='project-actions'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-link'
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitHubIcon />
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-link primary'
                  aria-label={`View ${project.title} live demo`}
                >
                  <LaunchIcon />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </article>
            ))}
          </div>
        </>
      )}

      <div className='projects-cta fadeOut'>
        <p>Want to see more of my work?</p>
        <a
          href='https://github.com/darshjasani'
          target='_blank'
          rel='noopener noreferrer'
          className='view-all-btn'
          aria-label="View all projects on GitHub"
        >
          <GitHubIcon />
          <span>View All Projects</span>
        </a>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className='modal-overlay' 
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className='modal-content' 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className='modal-close'
              onClick={closeModal}
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className='modal-image'
            />

            <div className='modal-body'>
              <h2 id="modal-title" className='modal-title'>{selectedProject.title}</h2>
              <p className='modal-description'>{selectedProject.longDescription}</p>

              <div className='modal-section'>
                <h3>Technologies Used</h3>
                <div className='modal-tech'>
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className='tech-tag large'>{tech}</span>
                  ))}
                </div>
              </div>

              <div className='modal-section'>
                <h3>Key Features</h3>
                <ul className='features-list'>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className='modal-actions'>
                <a
                  href={selectedProject.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='modal-btn'
                >
                  <GitHubIcon />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.demo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='modal-btn primary'
                >
                  <LaunchIcon />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
