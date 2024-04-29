import React, { useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const clickBtn = () =>{
      alert("Let's connect on LinkedIn to discuss the opportunity!!");
      window.location.href = 'https://www.linkedin.com/in/darsh-jasani/';
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
  })
  return (
    <>
            <div className='navbar'>
                <div>Darshkumar Jasani</div>
                <div className='links'>
                    <a className="navElement" href="#home">Home</a>
                    <a className="navElement" href="#experience">Experience</a>
                    <a className="navElement" href="#projects">Projects</a>
                    <a className='hire' onClick={clickBtn}>Hire me!</a>
                </div>
            </div>
    </>
  )
}

export default Navbar