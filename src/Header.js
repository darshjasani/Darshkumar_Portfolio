import React from 'react'
import './Header.css'
import img from './profile2.jpeg'
import CircleIcon from '@mui/icons-material/Circle';

function Header() {


  return (
    <>
      <div id="home">
        <div className='point'><CircleIcon/> About</div>
        <div className='headerBody'>
          <div className='details'>
            <div class="patterns">
              <svg width="100%" height="100%">
                <defs> 
                    <style>
                @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                    </style>
                </defs>        
                <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
              <text x="48%" y="40%"  text-anchor="middle">
                Web & Software Developer
              </text>

              <text className="secondText" x="48%" y="70%"  text-anchor="middle">
                based in California.
              </text>
            </svg>
            </div>
          </div>
          <div>
            <img src = {img} className='profileImage'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header