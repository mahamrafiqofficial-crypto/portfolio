import React ,{useState}from 'react';
import { ImMenu4 } from "react-icons/im";
import { ImMenu3 } from "react-icons/im";
import { Link } from 'react-scroll';
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation} from 'react-icons/fc'
import { FcDocument } from 'react-icons/fc';
import "./MobileNav.css";

export const MobileNav = () => {
    const [open,setOpen] = useState(false)

    //handle open
    const handleOpen = () =>{
        setOpen(!open);
    };

    //handle menu clicks
    const handleMenuClick = () => {
        setOpen(false);
    };
  return (
    <>
    <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            {open ? (
                <ImMenu3 
                size={30} 
                className='mobile-nav-icon' 
                onClick={handleOpen}
                />
            ) : (
             <ImMenu4 
             size={30} 
             className='mobile-nav-icon' 
             onClick={handleOpen}
             />
             )}
          

          <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open && (
           <div className="mobile-nav-menu">
            <div className='nav-items'>
                  <div className='nav-item'>
                    <div className='nav-link'>
                      <Link to="home" spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                      <FcHome /> Home</Link>
                      </div>
                      <div className='nav-link'>
                        <Link to="about" spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                      <FcAbout /> About </Link>
                      </div>
                      <div className='nav-link'>
                        <Link to="education" spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                      <FcReadingEbook /> Education </Link>
                      </div>
                      <div className='nav-link'>
                        <Link to="projects" spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                      <FcVideoProjector /> Projects </Link>
                       </div>
                       <div className='nav-link'>
                        <Link to="techstack" spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                      <FcBiotech /> Tech Stack </Link>
                      </div>
                      <div className='nav-link'>
                        <Link to="workexp" spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                      <FcPortraitMode /> Work Experience </Link>
                      </div>
                      <div className='nav-link'>
    <Link to="certifications" spy={true} offset={-100} duration={100}>
        <FcDocument /> Certifications
    </Link>
</div>
                      <div className='nav-link'>
                        <Link to="contact" spy={true} offset={-100} duration={100} onClick={handleMenuClick}>
                      <FcBusinessContact /> Contact </Link>
                      </div>
                  </div>
                </div>
        </div>
        )}
        
    </div>
    </>
  )
}
