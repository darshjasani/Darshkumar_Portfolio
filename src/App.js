import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import Header from './Header';
import Navbar  from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import './App.css'
import { duration } from '@mui/material';


function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [circleVisible, setCircleVisible] = useState(false);

  useEffect(() =>{
    const timer = setInterval(()=>{
      setShowLoader(false);
    }, 3500);

    return () => clearTimeout(timer)
  }, [])

  const scrollEffect = ()=>{
    const trailer = document.getElementById("trailer");
    
    
    window.onmousemove = (e)=>{
      const x = e.clientX - trailer?.offsetWidth/2,
            y = e.clientY - trailer?.offsetHeight/2;

     
      const keyframes = {
        transform : `translate(${x}px, ${y}px)`
      }

      trailer?.animate(keyframes,{
        duration:800,
        fill:"forwards"
      });
    }
  }
  useEffect(()=>{
    scrollEffect();
  },[circleVisible])

  useEffect(() => {
    const handleMouseMove = () => {
      setCircleVisible(true);
      // Remove the event listener after the first movement
      
      window.removeEventListener('mousemove', handleMouseMove);
    };

    // Add event listener to detect the first mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove); // Clean up
    };
  }, []);
  
  return (
    <>
      {circleVisible && 
        <div id='trailer'>
         <div id='circle'></div>
      </div>
      }
      {
        showLoader ? <Loader/>
         :
        <>
          <Navbar/>
          <Header/>
          <Experience/>
          <Projects/>
          <Skills/>
          <Contact/>
          <Footer/>
        </>

      }
      
    </>
  )
}

export default App