import React from 'react'
import './Loader.css'
function Loader() {
  return (
    <>
        <div className='loaderBody'>
            <div id="loader">
                <div class="ls-particles ls-part-1"></div>
                <div class="ls-particles ls-part-2"></div>
                <div class="ls-particles ls-part-3"></div>
                <div class="ls-particles ls-part-4"></div>
                <div class="ls-particles ls-part-5"></div>
                <div class="lightsaber ls-left ls-green"></div>
                <div class="lightsaber ls-right ls-green"></div>
            </div>
        </div>

        <div style={{color:'white',fontSize:'20px',position:'absolute', top:'63%', left:'50%', transform:'translate(-50%,-50%)'}}>Loading Profile ...</div>
    </>
  )
}

export default Loader