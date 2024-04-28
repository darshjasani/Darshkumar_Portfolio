import React from 'react'
import './Navbar.css'

function Navbar() {
  const clickBtn = () =>{
      alert('Work in Progress!!. Redirecting to LinkedIn for more details');
      window.location.href = 'https://www.linkedin.com/in/darsh-jasani/';
  }
  return (
    <>
            <div className='navbar'>
                <div>Darshkumar Jasani</div>
                <div className='links'>
                    <div onClick={clickBtn}>Home</div>
                    <div onClick={clickBtn}>Experience</div>
                    <div onClick={clickBtn}>Projects</div>
                    <div className='hire' onClick={clickBtn}>Hire me!</div>
                </div>
            </div>
    </>
  )
}

export default Navbar