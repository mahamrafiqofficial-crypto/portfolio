import React from 'react'
import './Projects.css'
import { Fade } from 'react-awesome-reveal';
import { ParticlesBg } from '../../Components/ParticlesBg'; // 👈 add karo

export const Projects = () => {
  return (
    <>
    {/* 👇 position relative add karo */}
    <div className='container project' id="projects" style={{ position: 'relative' }}>

      {/* 👇 yeh add karo */}
      <ParticlesBg variant="orbs" />

      {/* 👇 zIndex add karo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2>
        <hr />
        <p className='pb-3 text-center'>
          Take a look at some of my best work! These projects showcase my expertise in building modern, scalable, and user-friendly web applications using MongoDB, Express.js, React, and Node.js. Each project comes with a live link and source code — so you can see not just what I built, but how I built it. 🚀
        </p>

        <div className='row' id='ads'>
          <div className='col-md-4'>
            <Fade direction="up" triggerOnce delay={0}>
              <div className="card rounded">
                <div className='card-image'>
                  <span className='card-notify-badge'>Full Stack</span>
                  <img src="/images/project 5.png" alt="project1" />
                </div>
                <Fade direction="up" triggerOnce cascade damping={0.15}>
                  <div className='card-image-overlay m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className='card-detail-badge'>Express</span>
                    <span className='card-detail-badge'>React</span>
                    <span className='card-detail-badge'>Moongodb</span>
                    <span className='card-detail-badge'>TailwindCSS</span>
                  </div>
                </Fade>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <Fade direction="up" triggerOnce cascade damping={0.15}>
                      <h5 className="text-uppercase">Personal Portfolio Website</h5>
                    </Fade>
                  </div>
                  <Fade direction="up" triggerOnce cascade damping={0.15}>
                    <a className='ad-btn' href="https://portfolio-website-5f531.web.app/">View</a>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-4'>
            <Fade direction="up" triggerOnce delay={0}>
              <div className="card rounded">
                <div className='card-image'>
                  <span className='card-notify-badge'>Full Stack</span>
                  <img src="/images/project 6.png" alt="project1" />
                </div>
                <Fade direction="up" triggerOnce cascade damping={0.15}>
                  <div className='card-image-overlay m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className='card-detail-badge'>Express</span>
                    <span className='card-detail-badge'>React</span>
                    <span className='card-detail-badge'>Moongodb</span>
                    <span className='card-detail-badge'>Typescript</span>
                  </div>
                </Fade>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <Fade direction="up" triggerOnce cascade damping={0.15}>
                      <h5 className="text-uppercase">WorldClass Travel Website</h5>
                    </Fade>
                  </div>
                  <Fade direction="up" triggerOnce cascade damping={0.15}>
                    <a className='ad-btn' href="https://worldclassvoyages.netlify.app/#/">View</a>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-4'>
            <Fade direction="up" triggerOnce delay={0}>
              <div className="card rounded">
                <div className='card-image'>
                  <span className='card-notify-badge'>Full Stack</span>
                  <img src="/images/notesapp preview.png" alt="project1" />
                </div>
                <Fade direction="up" triggerOnce cascade damping={0.15}>
                  <div className='card-image-overlay m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className='card-detail-badge'>Express</span>
                    <span className='card-detail-badge'>React</span>
                    <span className='card-detail-badge'>Moongodb</span>
                    <span className='card-detail-badge'>Tiptap</span>
                    <span className='card-detail-badge'>Vercel</span>
                    <span className='card-detail-badge'>Git/GitHub</span>
                  </div>
                </Fade>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <Fade direction="up" triggerOnce cascade damping={0.15}>
                      <h5 className="text-uppercase">Notely Notes App</h5>
                    </Fade>
                  </div>
                  <Fade direction="up" triggerOnce cascade damping={0.15}>
                    <a className='ad-btn' href="https://notes-by-maham.vercel.app">View</a>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
          
          <div className='col-md-4'>
            <Fade direction="up" triggerOnce delay={0}>
              <div className="card rounded">
                <div className='card-image'>
                  <span className='card-notify-badge'>Full Stack</span>
                  <img src="/images/Studentmgmt.png" alt="project1" />
                </div>
                <Fade direction="up" triggerOnce cascade damping={0.15}>
                  <div className='card-image-overlay m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className='card-detail-badge'>Express</span>
                    <span className='card-detail-badge'>React</span>
                    <span className='card-detail-badge'>Moongodb</span>
                    <span className='card-detail-badge'>JWT</span>
                    <span className='card-detail-badge'>Vercel</span>
                    <span className='card-detail-badge'>Git/GitHub</span>
                  </div>
                </Fade>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <Fade direction="up" triggerOnce cascade damping={0.15}>
                      <h5 className="text-uppercase">STUDENT MANAGEMENT SYSTEM</h5>
                    </Fade>
                  </div>
                  <Fade direction="up" triggerOnce cascade damping={0.15}>
                    <a className='ad-btn' href="https://student-management-frontend-sage.vercel.app">View</a>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-4'>
            <Fade direction="up" triggerOnce delay={0}>
              <div className="card rounded">
                <div className='card-image'>
                  <span className='card-notify-badge'>Digital Marketing</span>
                  <img src="/images/Gig.jpeg" alt="project1" />
                </div>
                <Fade direction="up" triggerOnce cascade damping={0.15}>
                  <div className='card-image-overlay m-auto mt-3'>
                    <span className='card-detail-badge'>Brevo</span>
                    <span className='card-detail-badge'>SMTP Server</span>
                    <span className='card-detail-badge'>Mail250</span>
                    <span className='card-detail-badge'>Leads generation</span>
                    <span className='card-detail-badge'>Custom e-mail templates</span>
                    
                  </div>
                </Fade>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <Fade direction="up" triggerOnce cascade damping={0.15}>
                      <h5 className="text-uppercase">E-MAIL MARKETING Client Feedback</h5>
                    </Fade>
                  </div>
                  <Fade direction="up" triggerOnce cascade damping={0.15}>
                    <a className='ad-btn' href="https://www.fiverr.com/urooj_inbox_pro/send-bulk-emails-email-blast-and-email-marketing-campaign-to-inbox">View</a>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>

          <div className='col-md-4'>
            <Fade direction="up" triggerOnce delay={0}>
              <div className="card rounded">
                <div className='card-image'>
                  <span className='card-notify-badge'>Full Stack</span>
                  <img src="/images/quiz.png" alt="project1" />
                </div>
                <Fade direction="up" triggerOnce cascade damping={0.15}>
                  <div className='card-image-overlay m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className='card-detail-badge'>Express</span>
                    <span className='card-detail-badge'>React</span>
                    <span className='card-detail-badge'>Moongodb</span>
                    <span className='card-detail-badge'>JWT</span>
                    <span className='card-detail-badge'>Vercel</span>
                    <span className='card-detail-badge'>Git/GitHub</span>
                  </div>
                </Fade>
                <div className='card-body text-center'>
                  <div className='ad-title m-auto'>
                    <Fade direction="up" triggerOnce cascade damping={0.15}>
                      <h5 className="text-uppercase">LEARNING QUIZ WEB APPLICATION</h5>
                    </Fade>
                  </div>
                  <Fade direction="up" triggerOnce cascade damping={0.15}>
                    <a className='ad-btn' href="https://quiz-appify.vercel.app/">View</a>
                  </Fade>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}