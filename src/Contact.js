import React from 'react'
import './Contact.css';
import CircleIcon from '@mui/icons-material/Circle';

function Contact() {
    const email = 'darshkumar.jasani@gmail.com'
    const redirect = () =>{
        let a = window.confirm("Let's connect over LinkedIn?");
        if(a){
            window.location.href = "https://www.linkedin.com/in/darsh-jasani/";
        }
    } 
  return (
    <>
        <div className='point'><CircleIcon/> Contact me</div>
        <div className='contactBody'>
            <div className='contactDesc'>
                <div className='start'>Let's connect</div>
                <div className='end'>Now that you know a lot about me, let's us work together to create something valuable.</div>
                <div class="contact-first-component">
                    <div class="contact-social-links">
                    <a href="https://www.linkedin.com/in/darsh-jasani" target="_blank" class="contact-social-icon">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/yourprofile" target="_blank" class="contact-social-icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://github.com/darshjasani" target="_blank" class="contact-social-icon">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto:darshkumar.jasani@gmail.com" class="contact-social-icon">
                        <i class="fas fa-envelope"></i>
                    </a>
                    </div>
                </div>
            </div>
            <div className='contactForm'>
                <div>
                    Subject : <br/>
                    <input type='text' onChange={redirect}/>
                </div>

                <div>
                    Email Address : <br/>
                    <input type='email' onChange={redirect}/>
                </div>
                
                <div>
                    Message : <br/>
                    <textarea onChange={redirect}/>
                </div>
                
                <button onClick={()=>{window.location.href = `mailto:${email}`}}>Let's get started</button>
            </div>
        </div>
    </>
  )
}

export default Contact
