import React from 'react'
import './Header.css'
import img from './profile2.jpeg'
function Header() {


  return (
    <>
      <div>
        <div className='headerBody'>
          <div>
            <div class="patterns">
              <svg width="100%" height="100%">
                <defs> 
                    <style>
                @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                    </style>
                </defs>        
                <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>
              <text x="48%" y="70%"  text-anchor="middle">
                I'm Darshkumar Jasani
              </text>
            </svg>
            </div>

            
          </div>
          <img src = {img}/>
        </div>
      </div>
    </>
  )
}

export default Header