import React from 'react'
import './Footer.css';
import CircleIcon from '@mui/icons-material/Circle';

function Footer() {
  const email = 'darshkumar.jasani@gmail.com';
  return (
    <>
        <div className='footerBody'>
            <div className='footerStart'><CircleIcon/> Darshkumar Jasani &copy; 2024</div>
            <div className='footerEnd'>
                <div className='flinks' onClick={()=>{window.location.href = 'https://darshkumar-portfolio.web.app/'}}>Portfolio</div>
                <div className='flinks' onClick={()=>{window.location.href = 'https://github.com/darshjasani'}}>GitHub</div>
                <div className='flinks' onClick={()=>{window.location.href = 'https://www.linkedin.com/in/darsh-jasani/'}}>LinkedIn</div>
                <div className='flinks' onClick={()=>{window.location.href = `mailto:${email}`}}>Email</div>
                <div>Made with love</div>
            </div>
        </div>
    </>
  )
}

export default Footer