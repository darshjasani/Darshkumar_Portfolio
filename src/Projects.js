import React, { useEffect } from 'react'
import './Projects.css';
import CircleIcon from '@mui/icons-material/Circle';
import CallMadeIcon from '@mui/icons-material/CallMade';
import img from './profile.jpeg'
import chatimg from  './chatapp.png'
import weatherimg from './weather.png'
import movieimg from './MovieRecom.jpeg'
import bankimg from './BankingSys.jpeg'
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
        <div className='pBody'>
            <div className='ptitle'><CircleIcon/> My Projects</div>
            <div className='pDesc'>Work that I've done for the past 4 years</div>
            <div>
                <div className='cardBody fadeOut' onClick={()=>{window.location.href = 'https://slack-cone-c0ca8.web.app/'}}>
                        <img src={chatimg}/>
                        <div className='cTitle'>
                            Chat Application
                        </div>
                        <div className='cDesc'>
                        A feature-rich real-time chat application with Google authentication, infinite scroll, room creation, profile customization, and secure login functionality, providing users with a seamless and interactive messaging experience using ReactJS anf Firebase.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
                </div>

                <div className='cardBody cardBody1 fadeOut' onClick={()=>{window.location.href = 'https://weatherapp-dcc56.web.app/' }}>
                        <img src={weatherimg}/>
                        <div className='cTitle'>
                            Weather Forecast
                        </div>
                        <div className='cDesc'>
                        Seamless integration of the OpenWeatherMap API within a React application, showcasing the retrieval and presentation of real-time weather data for any location across the globe. Enhanced with bespoke CSS styling, users can access and interpret weather information effortlessly.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
                </div>

                <div className='cardBody cardBody2 fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani/Movie-Recommender' }}>
                        <img src={movieimg}/>
                        <div className='cTitle'>
                            Movie Recommendation Model
                        </div>
                        <div className='cDesc'>
                        The project focuses on collaborative filtering to recommend movies, optimizing parameters through gradient descent, validating accuracy using numerical gradients, and analyzing a dataset with user ratings ranging from 1 to 5.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
                </div>

                <div className='cardBody cardBody3 fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani/Banking-System' }}>
                        <img src={bankimg}/>
                        <div className='cTitle'>
                            Banking System
                        </div>
                        <div className='cDesc'>
                        This Java program simulates a bank system with functionalities like withdrawal, deposit, and balance checking for Savings and Current Accounts, incorporating constraints such as minimum balance requirements and government or central bank regulations.
                        </div>
                        <div className='cLink'><CallMadeIcon/></div>
                </div>

                <button className='allProjects fadeOut' onClick={()=>{window.location.href = 'https://github.com/darshjasani' }}>VIEW ALL PROJECTS</button>
            </div>
        </div>
    </>
  )
}

export default Projects