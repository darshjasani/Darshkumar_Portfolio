import React from 'react'
import './Experience.css'
import CircleIcon from '@mui/icons-material/Circle';

function Experience() {
  return (
    <>
        <div className='eBody' id="experience">
            <div className='etitle'><CircleIcon/> Experience</div>
            <div className='timeline'>
              <div className='expCard'>
                  <div className='expCardBody'>
                    <div className='cardTitle'>
                      <h1 className='cardPosition'>Research Assistant</h1>
                      <p>Aug 23 - Dec 23</p>
                    </div>

                    <ul  className='cardDetail'>
                      <li>Modeled a data-analysis method that enhanced the efficiency of API calls to the GPT model by 30% through the
implementation of exploratory data analysis techniques.</li>
                      <li>Designed a specialized chatbot solution to optimize response time for coursework-related queries, achieving a 15%
improvement in efficiency by incorporating the LlamaIndex data framework.</li>
                    </ul>
                  </div>
              </div>

              <div className='expCard'>
                  <div className='expCardBody'>
                    <div className='cardTitle'>
                      <h1 className='cardPosition'>Student Assistant</h1>
                      <p>Aug 23 - Dec 23</p>
                    </div>

                    <ul  className='cardDetail'>
                      <li>Effectively facilitated student learning by actively engaging with them, providing comprehensive explanations, and resolving their queries pertaining to Data Structures and Algorithms.</li>
                      <li>Utilized Excel for in-depth analysis of student performance, leading to informed decisions regarding grades and providing personalized guidance to help students enhance their academic standing.</li>
                    </ul>
                  </div>
              </div>

              <div className='expCard'>
                  <div className='expCardBody'>
                    <div className='cardTitle'>
                      <h1 className='cardPosition'>Full Stack Dev Intern</h1>
                      <p>Dec 21 - May 22</p>
                    </div>

                    <ul  className='cardDetail'>
                      <li>Achieved a significant 20% reduction in response time by developing REST APIs using AngularJS, resulting in streamlined data entry and retrieval operations within SQL Server. </li>
                      <li>Resolved server latency issues by shifting from monolithic applications to microservices-based communication,
reducing the development time from 10 days to a mere 2 days via an object-oriented design.</li>
                    </ul>
                  </div>
              </div>

              <div className='expCard'>
                  <div className='expCardBody'>
                    <div className='cardTitle'>
                      <h1 className='cardPosition'>Software Dev Intern</h1>
                      <p>April 21 - Jul 21</p>
                    </div>

                    <ul  className='cardDetail'>
                      <li>Built a full-stack web application tailored for faculty needs and requirements, ultimately leading to a notable time savings
of 20+ hours per week using MVC architecture.</li>
                      <li>Spearheaded the automation of invoicing, report generation, and statistical analysis tasks, which led to a remarkable
50% reduction in wait time by optimizing SQL queries.</li>
                    </ul>
                  </div>
              </div>

              

              <div className='expCard'>
                  <div className='expCardBody'>
                    <div className='cardTitle'>
                      <h1 className='cardPosition'>Business Analytics</h1>
                      <p>Jan 21 - Feb 21</p>
                    </div>

                    <ul  className='cardDetail'>
                      <li>Developed and tailored the front-end of an application to meet specific client requirements, while also contributing enhancements and additional features to align with their evolving needs.</li>
                      <li>Gained practical skills in front-end development by working on a real-world project, utilizing technologies like ReactJS, NodeJS, HTML/CSS, and other tools to meet specific client needs.</li>
                    </ul>
                  </div>
              </div>

              <div className='expCard'>
                  <div className='expCardBody'>
                    <div className='cardTitle'>
                      <h1 className='cardPosition'>Volunteer</h1>
                      <p>May 19 - Dec 20</p>
                    </div>

                    <ul  className='cardDetail'>
                      <li>Refined my organizational, negotiation, teamwork, and event management skills, enriching my capabilities and deepening my understanding of orchestrating large-scale events effectively.</li>
                      <li>Engaging in multifaceted tasks such as event design, sponsor acquisition, and promotional outreach across multiple colleges, which significantly expanded both my skill repertoire and professional network.</li>
                    </ul>
                  </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Experience