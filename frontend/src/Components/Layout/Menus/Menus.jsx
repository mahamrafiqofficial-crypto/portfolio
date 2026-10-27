import React from 'react';
import './Menus.css';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc';
import { FcDocument } from 'react-icons/fc';

export const Menus = ({ toggle }) => {
  return (
    <>
    {toggle ? (
      <>
      <Zoom>
        <div className='navbar-profie-pic'>
          <img src="/images/Profile-Pic.jpeg" alt='profile pic' />
        </div>
      </Zoom>
      <Fade left>
        <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to="home" spy={true} offset={-100} duration={100}>
                <FcHome /> Home
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="about" spy={true} offset={-100} duration={100}>
                <FcAbout /> About
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="education" spy={true} offset={-100} duration={100}>
                <FcReadingEbook /> Education
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="projects" spy={true} offset={-100} duration={100}>
                <FcVideoProjector /> Projects
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="techstack" spy={true} offset={-100} duration={100}>
                <FcBiotech /> Tech Stack
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="workexp" spy={true} offset={-100} duration={100}>
                <FcPortraitMode /> Work Experience
              </Link>
            </div>
            
            <div className='nav-link'>
              <Link to="certifications" spy={true} offset={-100} duration={100}>
                <FcDocument /> Certifications
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="contact" spy={true} offset={-100} duration={100}>
                <FcBusinessContact /> Contact
              </Link>
            </div>
          </div>
        </div>
      </Fade>
      </>
    ) : (
      <>
      <Fade left>
        <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to="home" spy={true} offset={-100} duration={100}>
                <FcHome title="Home" />
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="about" spy={true} offset={-100} duration={100}>
                <FcAbout title="About" />
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="education" spy={true} offset={-100} duration={100}>
                <FcReadingEbook title="Education" />
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="projects" spy={true} offset={-100} duration={100}>
                <FcBiotech title="Projects" />
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="techstack" spy={true} offset={-100} duration={100}>
                <FcVideoProjector title="Tech Stack" />
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="workexp" spy={true} offset={-100} duration={100}>
                <FcPortraitMode title="Work Experience" />
              </Link>
            </div>
            
            <div className='nav-link'>
              <Link to="certifications" spy={true} offset={-100} duration={100}>
                <FcDocument title="Certifications" />
              </Link>
            </div>
            <div className='nav-link'>
              <Link to="contact" spy={true} offset={-100} duration={100}>
                <FcBusinessContact title="Contact" />
              </Link>
            </div>
          </div>
        </div>
      </Fade>
      </>
    )}
    </>
  );
};