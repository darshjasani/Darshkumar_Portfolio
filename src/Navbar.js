import React, { useEffect, useState } from 'react'
import './Navbar.css'
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [display, setDisplay] = useState(false);

  const clickBtn = () =>{
      alert("Let's connect on LinkedIn to discuss the opportunity!!");
      window.location.href = 'https://www.linkedin.com/in/darsh-jasani/';
      setDisplay(!display);
  }


  useEffect(()=>{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    
  },[])
  return (
    <>
            <div className='navbar'>
                <div className='title'>Darshkumar Jasani</div>
                <div className={`menu ${display ? 'animates' : ''}`} onClick={()=>{setDisplay(!display)}}>
                  {!display ? <SortIcon/> : <CloseIcon/>}
                </div>
                {/* <div className='links'>
                  <button className='navBtn' id="navBtn" ></button>
                      <a className="navElement" id = "homes" href="#home" >Home</a>
                      <a className="navElement" id = "exp" href="#experience" >Experience</a>
                      <a className="navElement" id = "proj" href="#projects" >Projects</a>
                      <a className='hire navElement' id = "hireMe" >Hire me!</a> 
                    
                </div> */}
                <ul className={display ? "open" : ""}>
                  <li><a href="#home" onClick={()=>{setDisplay(false)}}>Home</a></li>
                  <li><a href="#experience" onClick={()=>{setDisplay(false)}}>Experience</a></li>
                  <li><a href="#projects" onClick={()=>{setDisplay(false)}}>Projects</a></li>
                  <li><a className="hireMe" onClick={clickBtn}>Hire Me!</a></li>
                </ul>
            </div>
    </>
  )
}

export default Navbar
