import React, { useEffect, useState } from 'react'
import './Header.css'
import img from './profile.jpeg'
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function Header() {
  const [one, showOne] = useState(true);
  const [two, showTwo] = useState(true);
  const [three, showThree] = useState(true);

  const animate = (btnId)=>{
    const btn = document.getElementById(btnId);
    const check = btn.classList.contains('animate')

    if(check){
      btn.classList.remove('animate');
      btn.classList.add('animate1');
    }
    else{
      btn.classList.add('animate');
      btn.classList.remove('animate1');
    }
  }
  const showContent = (textId, btnId) =>{
    const text = document.getElementById(textId)
    text.classList.toggle("show");
    animate(btnId);
  }
  const seeMore1 = ()=>{
    showOne(!one);
    const text1 = document.getElementById('website-info-idea1')
    text1.classList.toggle("show")

    const text2 = document.getElementById('website-info-idea2')
    if(text2.classList.contains("show")){
      showTwo(!two);
      showContent('website-info-idea2', 'btn2')
    }
        
    const text3 = document.getElementById('website-info-idea3')
    if(text3.classList.contains("show")){
      showThree(!three)
      showContent('website-info-idea3', 'btn3')
    }

    animate('btn1')
  }
  const seeMore2 = ()=>{
    showTwo(!two);
    const text2 = document.getElementById('website-info-idea2')
    text2.classList.toggle("show")

    const text1 = document.getElementById('website-info-idea1')
    if(text1.classList.contains("show")){
      showOne(!one);
      showContent('website-info-idea1', 'btn1')
    }
        
    const text3 = document.getElementById('website-info-idea3')
    if(text3.classList.contains("show")){
      showThree(!three)
      showContent('website-info-idea3', 'btn3')
    }

    animate('btn2')
  }
  const seeMore3 = ()=>{
    showThree(!three);
    const text3 = document.getElementById('website-info-idea3')
    text3.classList.toggle("show")

    const text2 = document.getElementById('website-info-idea2')
    if(text2.classList.contains("show")){
      showTwo(!two);
      showContent('website-info-idea2', 'btn2')
    }
        
    const text1 = document.getElementById('website-info-idea1')
    if(text1.classList.contains("show")){
      showOne(!one)
      showContent('website-info-idea1', 'btn1')
    }

    animate('btn3')
  }

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
        
       <div className='aboutMe'>
          <div>
            <div className='headLine'><button className='expandBtn' id = "btn1" onClick={seeMore1}>{one ? <AddIcon/> : <RemoveIcon/>}</button> <span onClick={seeMore1}>Who am I ?</span></div>
            <div class="col" id="website-info-idea1">Results-driven software development engineer with over 1.5+ years of experience in full stack development, project management, and customer engagements. Proven record of leveraging logical skills to drive code efficiencies, and increase revenue. Determined to help people through technology and contribute to business success.</div>
            
          </div>
          <div>
            <div className='headLine'><button className='expandBtn' id = "btn2" onClick={seeMore2}>{two ? <AddIcon/> : <RemoveIcon/>}</button><span onClick={seeMore2}>What are my areas of expertise ?</span></div>
            <div class="col" id="website-info-idea2">Proficient in crafting web development applications with segregated front-end and back-end services, particularly leveraging RESTful APIs. With an extensive track record of solving over 570 data structures and algorithmic problems across multiple online platforms, I have honed a deep understanding of programming concepts, particularly in Java.</div>
            
          </div>
          <div>
            <div className='headLine'><button className='expandBtn' id = "btn3" onClick={seeMore3}>{three ? <AddIcon/> : <RemoveIcon/>}</button><span onClick={seeMore3}>What are my achievement till date ?</span></div>
            <div class="col" id="website-info-idea3">Developed and deployed a full-stack application, saving 20+ hours weekly. Reduced server latency by shifting to microservices, cutting development time from 10 to 2 days. Collaborated with developers to optimize code-base via agile methods, resulting in a notable 33% system performance improvement.</div>
            
          </div>

       </div>
        
      </div>
    </>
  )
}

export default Header