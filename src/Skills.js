import React from 'react'
import './Skills.css'
import CircleIcon from '@mui/icons-material/Circle';
import htmlImg from './html.png'

function Skills() {
  return (
    <>
        <div className='skillsBody'>
            <div className='stitle'><CircleIcon/> Skills </div>
            <div className='skillsContainer'>
                <div className='skillCard'>
                    <img src={htmlImg} className='skillImg' alt = ''/>
                    <div className='skillLevel'>98%</div>
                    <h1 className='skillName'>HTML</h1>
                
                </div>

                <div className='skillCard'>
                    <img src={htmlImg} className='skillImg' alt = ''/>
                    <div className='skillLevel'>98%</div>
                    <h1 className='skillName'>HTML</h1>
                
                </div>

                <div className='skillCard'>
                    <img src={htmlImg} className='skillImg' alt = ''/>
                    <div className='skillLevel'>98%</div>
                    <h1 className='skillName'>HTML</h1>
                
                </div>

                <div className='skillCard'>
                    <img src={htmlImg} className='skillImg' alt = ''/>
                    <div className='skillLevel'>98%</div>
                    <h1 className='skillName'>HTML</h1>
                
                </div>

                <div className='skillCard'>
                    <img src={htmlImg} className='skillImg' alt = ''/>
                    <div className='skillLevel'>98%</div>
                    <h1 className='skillName'>HTML</h1>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills