import React from 'react'
import './Contact.css';
import CircleIcon from '@mui/icons-material/Circle';

function Contact() {
    const email = 'darshkumar.jasani@gmail.com'
  return (
    <>
        <div className='point'><CircleIcon/> Contact me</div>
        <div className='contactBody'>
            <div className='contactDesc'>
                <div className='start'>Let's connect</div>
                <div className='end'>Now that you know a lot about me, let me know if you are interested to hire me.</div>
            </div>
            <div className='contactForm'>
                <div>
                    Subject : <br/>
                    <input type='text' />
                </div>

                <div>
                    Email Address : <br/>
                    <input type='email' />
                </div>
                
                <div>
                    Message : <br/>
                    <textarea />
                </div>
                
                <button onClick={()=>{window.location.href = `mailto:${email}`}}>Let's get started</button>
            </div>
        </div>
    </>
  )
}

export default Contact