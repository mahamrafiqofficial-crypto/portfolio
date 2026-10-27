import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoLogoReact } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import './WorkExp.css';


export const WorkExp = () => {
  return (
    <div>
        <div className="work">
            <div className="container work-exp" id="workexp">
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>WORK EXPERIENCE</h2>
            <hr />
            <VerticalTimeline>
                 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2d2060', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d2060' }}
    date="April 2025 - Present"
    iconStyle={{ background: '#2d2060', color: '#fff' }}
    icon={<IoLogoReact />}
  >
    <h3 className="vertical-timeline-element-title">EMAIL MARKETING SPECIALIST</h3>
    <h4 className="vertical-timeline-element-subtitle text-info">Freelancer,Fiverr</h4>
     <p className="vertical-timeline-element-tools">
    <strong className='text-warning'>Tools:</strong> Brevo, Mail250, SMTP Server
  </p>
    <p>
      Campaign Strategy, Email Automation, Lead Generation, List Segmentation, Client Communication
    </p>
  </VerticalTimelineElement>
                 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2d2060', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d2060' }}
    date="June 2024 - August 2024"
    iconStyle={{ background: '#2d2060', color: '#fff' }}
    icon={<MdDesignServices />}
  >
    <h3 className="vertical-timeline-element-title">GRAPHIC DESIGNER</h3>
    <h4 className="vertical-timeline-element-subtitle text-info">Remote Job</h4>
     <p className="vertical-timeline-element-tools">
    <strong className='text-warning'>Tools:</strong>  Canva Pro
  </p>
    <p>
       Social Media Design, Poster Design, Brand Visuals, Creative Content Delivery
    </p>
  </VerticalTimelineElement>
                 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2d2060', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d2060' }}
    date="February 2025 - April 2025"
    iconStyle={{ background: '#2d2060', color: '#fff' }}
    icon={<FaRobot />}
  >
    <h3 className="vertical-timeline-element-title">AI VIDEO CONTENT CREATOR</h3>
    <h4 className="vertical-timeline-element-subtitle text-info">Remote Job</h4>
     <p className="vertical-timeline-element-tools">
    <strong className='text-warning'>Tools:</strong> Google Gemini, Sora, Grok, Flow, Wisk, ChatGPT, CapCut Pro
  </p>
    <p>
       AI Prompt Engineering, Video Content Creation, YouTube & Facebook Shorts, Long-Form Editing
    </p>
  </VerticalTimelineElement>
                 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2d2060', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d2060' }}
    date="January 2026 - Present"
    iconStyle={{ background: '#2d2060', color: '#fff' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">FULL STACK WEB DEVELOPER</h3>
    <h4 className="vertical-timeline-element-subtitle text-info">Corvit Networking,Lahore</h4>
     <p className="vertical-timeline-element-tools">
    <strong className='text-warning'>Tools:</strong> HTML, CSS, Bootstrap, React, Node.js, Express.js, MongoDB, MySQL
  </p>
    <p>
       Front-End Development, RESTful API Integration, Backend Development, Database Management
    </p>
  </VerticalTimelineElement>

   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2d2060', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d2060' }}
    date="July 2026 - September 2026"
    iconStyle={{ background: '#2d2060', color: '#fff' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">MERN Stack Developer Intern (Cohort 9)</h3>
    <h4 className="vertical-timeline-element-subtitle text-info">10Pearls SHINE Internship Program</h4>
     <p className="vertical-timeline-element-tools">
    <strong className='text-warning'>Tools:</strong> React, Node.js, Express.js, MongoDB, JWT, Git/GitHub, Vercel
  </p>
    <p>
       Built Notely, a full stack notes app with secure authentication, a rich text editor, search, pinning, tags, dark mode, and import/export. Deployed live on Vercel.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2d2060', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #2d2060' }}
    date="July 2026 - August 2026"
    iconStyle={{ background: '#2d2060', color: '#fff' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">MERN Stack Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle text-info">Code Cryptical IT Innovators</h4>
     <p className="vertical-timeline-element-tools">
    <strong className='text-warning'>Tools:</strong> React, Node.js, Express.js, MongoDB, JWT, Mongoose, Vercel
  </p>
    <p>
       Built a role-based Student Management System with JWT authentication, REST API, and full CRUD,deployed on Vercel with MongoDB Atlas
    </p>
  </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        </div>
    </div>
  )
}
