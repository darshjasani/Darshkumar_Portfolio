import React from 'react'
import './Footer.css';
import CircleIcon from '@mui/icons-material/Circle';

function Footer() {
  return (
    <>
        <div className='footerBody'>
            <div className='footerStart'><CircleIcon/> Darshkumar Jasani &copy; 2024</div>
            <div className='footerEnd'>
                <div className='flinks'>Portfolio</div>
                <div className='flinks'>LinkedIn</div>
                <div className='flinks'>Email</div>
                <div>Made with love</div>
            </div>
        </div>
    </>
  )
}

export default Footer