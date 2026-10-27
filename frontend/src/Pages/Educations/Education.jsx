import React from 'react';
import { MdSchool, MdEmail } from "react-icons/md";
import { FaLaptopCode, FaLinux, FaCode } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';
import { ParticlesBg } from '../../Components/ParticlesBg'; 

export const Education = () => {
  return (
    <>
    
    <div className="container education" id="education" style={{ position: 'relative' }}>

      
      <ParticlesBg variant="dots" />

      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>EDUCATION DETAILS</h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid #2d2060' }}
            date="2022-2026"
            iconStyle={{ background: '#2d2060', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Bachelors(4 years Program)</h3>
            <h4 className="vertical-timeline-element-subtitle">Information Technology,GCUF</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid #2d2060' }}
            date="2023"
            iconStyle={{ background: '#2d2060', color: '#fff' }}
            icon={<FaLaptopCode />}
          >
            <h3 className="vertical-timeline-element-title">FREELANCING</h3>
            <h4 className="vertical-timeline-element-subtitle">Certified Training Course,PFTF</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid #2d2060' }}
            date="2024"
            iconStyle={{ background: '#2d2060', color: '#fff' }}
            icon={<MdEmail />}
          >
            <h3 className="vertical-timeline-element-title">E-MAIL MARKETING</h3>
            <h4 className="vertical-timeline-element-subtitle">Certified Training Course,Digital Marketing Software house</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid #2d2060' }}
            date="2025"
            iconStyle={{ background: '#2d2060', color: '#fff' }}
            icon={<FaLinux />}
          >
            <h3 className="vertical-timeline-element-title">LINUX ESSENTIALS</h3>
            <h4 className="vertical-timeline-element-subtitle">Certified Training Course,CISCO</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid #2d2060' }}
            date="2026"
            iconStyle={{ background: '#2d2060', color: '#fff' }}
            icon={<FaCode />}
          >
            <h3 className="vertical-timeline-element-title">FULL STACK WEB DEVELOPER(MERN)</h3>
            <h4 className="vertical-timeline-element-subtitle">Certified Training Course,NAVTTC</h4>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>

    </div>
    </>
  )
}