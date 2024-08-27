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
            <div class="skillContainer">
                 <h1 class="skillTitle">Skills</h1>
                    <div className='skillsList'>
                        <div class="skills">
                            <div class="skill"> <i class="fab fa-react"></i> <span>React</span> </div>
                            <div class="skill"> <i class="fab fa-node-js"></i> <span>Node</span> </div>
                            <div class="skill"> <i class="fab fa-js-square"></i> <span>Javascript</span> </div>
                            <div class="skill"> <i class="fas fa-database"></i> <span>SQL</span> </div>
                            <div class="skill"> <i class="fab fa-aws"></i> <span>AWS</span> </div>
                        
                            <div class="skill"> <i class="fab fa-docker"></i> <span>Docker</span> </div>
                            <div class="skill"> <i class="fas fa-cubes"></i> <span>Kubernetes</span> </div>
                            <div class="skill"> <i class="fab fa-figma"></i> <span>Figma</span> </div>
                            <div class="skill"> <i class="fab fa-java"></i> <span>Java</span> </div>
                            <div class="skill"> <i class="fab fa-python"></i> <span>Python</span> </div>
                        </div>
                    </div>       
            </div>
        </div>
    </>
  )
}

export default Skills