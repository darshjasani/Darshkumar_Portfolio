import React, { useEffect } from 'react'
import './Projects.css';
import CircleIcon from '@mui/icons-material/Circle';
import CallMadeIcon from '@mui/icons-material/CallMade';
import img from './profile.jpeg'
import chatimg from  './chatapp.png'
import weatherimg from './weather.png'
import movieimg from './MovieRecom.jpeg'
import bugimg from './Bughound.png'
function Projects() {
    useEffect(()=>{
      const items = document.querySelectorAll('.fadeOut');

      const active = function(entries){
          entries.forEach(entry => {
              if(entry.isIntersecting){
              entry.target.classList.add('inview2'); 
              }else{
                  entry.target.classList.remove('inview2'); 
              }
          });
      }
      const io2 = new IntersectionObserver(active);
      for(let i=0; i < items.length; i++){
          io2.observe(items[i]);
      }
    },[])

  return (
    <>
        <div className='pBody' id="projects">
            <div className='ptitle'><CircleIcon/>Projects</div>
            <div className='pDesc'>Work that I've done for the past 4 years</div>
            <div className='cardsBody'>
                <div class="exp-page-wrapper fadeOut" onClick={()=>{window.location.href = 'https://github.com/darshjasani/ChatHub'}}>
                    <div class="exp-card-container">
                        <a href="" class="exp-hero-image-container">
                            <img class="exp-hero-image" src={chatimg} alt="Spinning glass cube"/>
                        </a>
                        <main class="exp-main-content">
                            <h1 class="exp-title"><a href="#" class="exp-title-link">Chat Application</a></h1>
                            <p class="exp-description">A feature-rich real-time chat application with Google authentication, infinite scroll, room creation, profile customization, and secure login functionality, providing users with a seamless and interactive messaging experience using ReactJS anf Firebase.</p>
                            
                        </main>
                        <div class="exp-skill-box">
                            <span class="exp-skill">HTML</span>
                            <span class="exp-skill">CSS</span>
                            <span class="exp-skill">JS</span>
                            <span class="exp-skill">React</span>
                        </div>

                        </div>
                    
                </div>

                <div class="exp-page-wrapper fadeOut cardBody1" onClick={()=>{window.location.href = 'https://github.com/darshjasani/BugHound'}}>
                    <div class="exp-card-container">
                        <a href="" class="exp-hero-image-container">
                            <img class="exp-hero-image" src={bugimg} alt="Spinning glass cube"/>
                        </a>
                        <main class="exp-main-content">
                            <h1 class="exp-title"><a href="#" class="exp-title-link">Bughound Bug Tracking Software</a></h1>
                            <p class="exp-description">Bughound is a secure, web-based bug recording and tracking software designed for testing and verifying product functionality. The project is a scaled-back version of a previous product developed for a company in Bellevue, WA.</p>
                            
                        </main>
                        <div class="exp-skill-box">
                            <span class="exp-skill">HTML</span>
                            <span class="exp-skill">CSS</span>
                            <span class="exp-skill">JS</span>
                            <span class="exp-skill">React</span>
                        </div>

                        </div>
                    
                </div>

                <div class="exp-page-wrapper fadeOut cardBody2" onClick={()=>{window.location.href = 'https://github.com/darshjasani/WeatherWebApp'}}>
                    <div class="exp-card-container">
                        <a href="" class="exp-hero-image-container">
                            <img class="exp-hero-image" src={weatherimg} alt="Spinning glass cube"/>
                        </a>
                        <main class="exp-main-content">
                            <h1 class="exp-title"><a href="#" class="exp-title-link">Weather Forecast</a></h1>
                            <p class="exp-description">Seamless integration of the OpenWeatherMap API within a React application, showcasing the retrieval and presentation of real-time weather data for any location across the globe. Enhanced with bespoke CSS styling, users can access and interpret weather information effortlessly.</p>
                            
                        </main>
                        <div class="exp-skill-box">
                            <span class="exp-skill">HTML</span>
                            <span class="exp-skill">CSS</span>
                            <span class="exp-skill">JS</span>
                            <span class="exp-skill">React</span>
                        </div>

                        </div>
                    
                </div>

                <div class="exp-page-wrapper fadeOut cardBody3" onClick={()=>{window.location.href = 'https://github.com/darshjasani/Movie-Recommender'}}>
                    <div class="exp-card-container">
                        <a href="" class="exp-hero-image-container">
                            <img class="exp-hero-image" src={movieimg} alt="Spinning glass cube"/>
                        </a>
                        <main class="exp-main-content">
                            <h1 class="exp-title"><a href="#" class="exp-title-link">Movie Recommendation Model</a></h1>
                            <p class="exp-description">The project focuses on collaborative filtering to recommend movies, optimizing parameters through gradient descent, validating accuracy using numerical gradients, and analyzing a dataset with user ratings ranging from 1 to 5.</p>
                            
                        </main>
                        <div class="exp-skill-box">
                            <span class="exp-skill">HTML</span>
                            <span class="exp-skill">CSS</span>
                            <span class="exp-skill">JS</span>
                            <span class="exp-skill">React</span>
                        </div>

                        </div>
                    
                </div>

                <div className='btnBody'>
                    <button className='allProjects fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani' }}>VIEW ALL PROJECTS</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects