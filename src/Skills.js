import React from 'react'
import './Skills.css'
import CircleIcon from '@mui/icons-material/Circle';
import htmlImg from './images/html.png'
import cssImg from './images/css.png'
import jsImg from './images/js.png'
import nodejsImg from './images/nodejs.png'
import reactjsImg from './images/reactjs-1.jpg'
import djangoImg from './images/django.png'
import gitImg from './images/git.jpg'
import firebaseImg from './images/firebase.jpg'
import javaImg from './images/java.jpg'
import cImg from './images/c.png'
import pythonImg from './images/python.jpg'
import sqlImg from './images/sql.jpg'
import postgreImg from './images/postgres.jpg'
import postmanImg from './images/postman.jpg'
import mdbImg from './images/mongodb.jpg'
import pandasImg from './images/pandas.jpg'
import tfImg from './images/tensorflow.jpg'
function Skills() {
  return (
    <>
        <div className='skillsBody'>
            <div className='stitle'><CircleIcon/> Skills </div>
            <div className='skillsContainer'>

                <div className='skillCard'>
                    <img src={htmlImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>98%</div> */}
                    <h1 className='skillName'>HTML</h1>
                    <div>
                    {/* <span class="score">
                        <div class="score-wrap">
                            <span class="stars-active" style={{width:'88%'}}>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </span>
                            <span class="stars-inactive">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                        </div>
                    </span> */}
                    </div>
                </div>

                <div className='skillCard'>
                    <img src={cssImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>98%</div> */}
                    <h1 className='skillName'>CSS</h1>
                </div>

                <div className='skillCard'>
                    <img src={jsImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>98%</div> */}
                    <h1 className='skillName'>JavaScript</h1>
                </div>

                <div className='skillCard'>
                    <img src={nodejsImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>90%</div> */}
                    <h1 className='skillName'>Node.js</h1>
                </div>

                <div className='skillCard'>
                    <img src={reactjsImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>90%</div> */}
                    <h1 className='skillName'>React.js</h1>
                </div>

                <div className='skillCard'>
                    <img src={djangoImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>85%</div> */}
                    <h1 className='skillName'>Django</h1>
                </div>

                <div className='skillCard'>
                    <img src={gitImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>90%</div> */}
                    <h1 className='skillName'>Git/GitHub</h1>
                </div>

                <div className='skillCard'>
                    <img src={firebaseImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>85%</div> */}
                    <h1 className='skillName'>Firebase</h1>
                </div>

                <div className='skillCard'>
                    <img src={javaImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>90%</div> */}
                    <h1 className='skillName'>Java</h1>
                </div>

                <div className='skillCard'>
                    <img src={cImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>98%</div> */}
                    <h1 className='skillName'>C</h1>
                </div>

                <div className='skillCard'>
                    <img src={pythonImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>90%</div> */}
                    <h1 className='skillName'>Python</h1>
                </div>

                <div className='skillCard'>
                    <img src={sqlImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>98%</div> */}
                    <h1 className='skillName'>SQL</h1>
                </div>

                <div className='skillCard'>
                    <img src={postgreImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>98%</div> */}
                    <h1 className='skillName'>PostgreSQL</h1>
                </div>

                <div className='skillCard'>
                    <img src={mdbImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>90%</div> */}
                    <h1 className='skillName'>MongoDB</h1>
                </div>

                <div className='skillCard'>
                    <img src={tfImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>85%</div> */}
                    <h1 className='skillName'>Tensorflow</h1>
                </div>

                <div className='skillCard'>
                    <img src={pandasImg} className='skillImg' alt = ''/>
                    {/* <div className='skillLevel'>90%</div> */}
                    <h1 className='skillName'>Pandas</h1>
                </div>


            </div>
        </div>
    </>
  )
}

export default Skills