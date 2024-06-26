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
                <div className='cardBody fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani/ChatHub'}}>
                        <img src={chatimg}/>
                        <div className='cTitle'>
                            Chat Application
                        </div>
                        <div className='cDesc'>
                        A feature-rich real-time chat application with Google authentication, infinite scroll, room creation, profile customization, and secure login functionality, providing users with a seamless and interactive messaging experience using ReactJS anf Firebase.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
                </div>

                <div className='cardBody cardBody1 fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani/BugHound' }}>
                        <img src={bugimg}/>
                        <div className='cTitle'>
                            Bughound Bug Tracking Software
                        </div>
                        <div className='cDesc'>
                        Bughound is a secure, web-based bug recording and tracking software designed for testing and verifying product functionality. The project is a scaled-back version of a previous product developed for a company in Bellevue, WA.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
                </div>

                <div className='cardBody cardBody2 fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani/WeatherWebApp' }}>
                        <img src={weatherimg}/>
                        <div className='cTitle'>
                            Weather Forecast
                        </div>
                        <div className='cDesc'>
                        Seamless integration of the OpenWeatherMap API within a React application, showcasing the retrieval and presentation of real-time weather data for any location across the globe. Enhanced with bespoke CSS styling, users can access and interpret weather information effortlessly.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
                </div>

                <div className='cardBody cardBody3 fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani/Movie-Recommender' }}>
                        <img src={movieimg}/>
                        <div className='cTitle'>
                            Movie Recommendation Model
                        </div>
                        <div className='cDesc'>
                        The project focuses on collaborative filtering to recommend movies, optimizing parameters through gradient descent, validating accuracy using numerical gradients, and analyzing a dataset with user ratings ranging from 1 to 5.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
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