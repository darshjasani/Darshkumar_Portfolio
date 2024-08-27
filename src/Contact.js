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
        {/* <div className='point'><CircleIcon/> Contact me</div>
        <div className='contactBody'>
            <div className='contactDesc'>
                <div className='start'>Let's connect</div>
                <div className='end'>Now that you know a lot about me, let me know if you are interested in working together.</div>
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
        </div> */}

        <div class="connect-container">
        
            <h1>Connect With Me</h1>
            
            <div class="connect-social-links">
                <a href="https://github.com/darshjasani" class="connect-social-link github">
                    Github
                    <i class="fab fa-github fa-fade"></i>   
                </a>
                <a href="https://www.linkedin.com/in/darsh-jasani" class="connect-social-link linkedin">
                    LinkedIn
                    <i class="fab fa-linkedin"></i>
                    
                </a>
                <a href="https://codepath.slack.com/team/U07431HEWKU" class="connect-social-link slack">
                    Slack
                    <i class="fab fa-slack"></i>
                    
                </a>
                <a href="https://discordapp.com/users/darshjasani" class="connect-social-link discord">
                    Discord
                    <i class="fab fa-discord"></i>
                    
                </a>
            </div>

            <div>
                <a href="#" class="mail-button">
                Shoot me a Mail &nbsp;&nbsp;
                <i class="fas fa-envelope mail"></i>
                </a>
            </div>
    </div>
    </>
  )
}

export default Contact