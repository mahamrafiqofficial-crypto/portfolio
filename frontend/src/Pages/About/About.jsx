import React from 'react'
import './About.css'
import { Fade } from 'react-awesome-reveal';
import { ParticlesBg } from '../../Components/ParticlesBg'; // 👈 add karo

export const About = () => {
  return (
    <>
    
<div className='about' id="about" style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>

      
      <ParticlesBg variant="bubbles" />

      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Fade direction="left" triggerOnce>
          <div className='row'>
            <div className="col-md-6 col-xl-6-lg-6 col-xs-12 about-img">
              <img src="/images/Profile Picc.png" alt="profile pic" />
            </div>
            <div className="col-md-6 col-xl-6-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am Maham a passionate Email Marketing Specialist and MERN Stack Developer helping businesses grow through high-converting campaigns and scalable web solutions. With 2+ years of experience, I deliver up to 90% inbox rates using my own email systems. I offer campaign strategy, copywriting, automation, and analytics using Mailchimp, Brevo, and other custom platforms. I also build responsive web apps, APIs, and dashboards using MongoDB, Express, React, and Node.js.
                Building fast, scalable, and user-friendly web applications using modern MERN stack technologies.!
              </p>
            </div>
          </div>
        </Fade>
      </div>

    </div>
    </>
  )
}