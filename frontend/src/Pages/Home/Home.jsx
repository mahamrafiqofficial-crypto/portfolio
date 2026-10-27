import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/MR_Updated_CV.pdf';
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";
import './Home.css';
import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ParticlesBg } from '../../Components/ParticlesBg';
import standPic from '../../assets/MERN.png';
import profilePic from '../../assets/Email.png';
import aiPic from '../../assets/AI1.png';

export const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className='container-fluid home-container' id="home">

        {/* Theme Button */}
        <div className='theme-btn' onClick={handleTheme}>
          {theme === 'light' ? (<BsMoonStarsFill size={30} />) : (<IoSunnySharp size={30} />)}
        </div>
         {/* Name Header */}
<div className="portfolio-name">
    Maham Rafiq
</div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="hero-swiper"
        >

          {/* ===== SLIDE 1 - MERN Stack ===== */}
          <SwiperSlide>
            <div className="hero-slide slide-galaxy">
              <ParticlesBg variant="stars" />
              <div className='container home-content-row'>

                {/* LEFT - Text */}
                <div className="hero-text">
                  
<span className="hero-badge" style={{ color: '#ffd700', borderColor: '#ffd700', background: 'rgba(255,215,0,0.15)' }}>
    Full Stack Developer
</span>
                  <Fade direction="up" triggerOnce>
                    <h2>Hi 👋 I'm a</h2>
                  </Fade>
                  <Fade direction="up" delay={200} triggerOnce>
                    <h1 style={{ color: '#ffd700' }}>
                      <Typewriter options={{
                        strings: ['MERN Stack Developer', 'Full Stack Developer'],
                        autoStart: true, loop: true,
                      }} />
                    </h1>
                  </Fade>
                  <Fade direction="up" delay={300} triggerOnce>
                    <div className="hero-tags">
                      <span className="hero-tag">MongoDB</span>
                      <span className="hero-tag">Express</span>
                      <span className="hero-tag">React</span>
                      <span className="hero-tag">Node.js</span>
                    </div>
                  </Fade>
                  <Fade direction="up" delay={400} triggerOnce>
                    <p className="hero-desc">
                      Building scalable full-stack web apps with MongoDB, Express, React & Node.js.
                    </p>
                    <div className="home-buttons">
                      <a href="http://api.whatsapp.com/send?phone=03291250747"
                        className='btn btn-hire' rel="noreferrer" target="_blank">
                        Hire Me
                      </a>
                      <a className='btn btn-cv' href={Resume} download="MR_Updated_CV.pdf">
                        My Resume
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* RIGHT - Photo */}
                <div className="hero-img-wrap">
                  <div className="hero-img-ring" style={{ borderColor: '#ffd700' }}></div>
                  <div className="hero-img-frame">
                    <img src={standPic} alt="Maham Rafiq" />
                  </div>
                  {/* Floating code badge */}
                  <div className="hero-float-badge" style={{ background: 'rgba(255,215,0,0.15)', border: '1px solid #ffd700', top: '10px', right: '-10px' }}>
                    <span style={{ color: '#ffd700', fontSize: '11px', fontFamily: 'monospace' }}>&lt;/&gt; Code</span>
                  </div>
                  <div className="hero-float-badge" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid #00ff88', bottom: '30px', left: '-10px' }}>
                    <span style={{ color: '#00ff88', fontSize: '11px' }}>⚡ MERN</span>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>

          {/* ===== SLIDE 2 - Email Marketing ===== */}
          <SwiperSlide>
            <div className="hero-slide slide-purple">
              <ParticlesBg variant="bubbles" />
              <div className='container home-content-row'>

                {/* LEFT - Text */}
                <div className="hero-text">
                  <span className="hero-badge" style={{ borderColor: '#bf5fff', color: '#bf5fff', background: 'rgba(191,95,255,0.15)' }}>
                    Digital Marketing
                  </span>
                  <Fade direction="up" triggerOnce>
                    <h2>Hi 👋 I'm a</h2>
                  </Fade>
                  <Fade direction="up" delay={200} triggerOnce>
                    <h1 style={{ color: '#bf5fff' }}>
                      <Typewriter options={{
                        strings: ['Email Marketing Specialist', 'Campaign Strategist', 'Growth Marketer'],
                        autoStart: true, loop: true,
                      }} />
                    </h1>
                  </Fade>
                  <Fade direction="up" delay={300} triggerOnce>
                    <div className="hero-stats">
                      <div className="hero-stat">
                        <span className="stat-num" style={{ color: '#ffd700' }}>90%+</span>
                        <span className="stat-label">Inbox Rate</span>
                      </div>
                      <div className="hero-stat">
                        <span className="stat-num" style={{ color: '#ffd700' }}>2+</span>
                        <span className="stat-label">Years Exp</span>
                      </div>
                      <div className="hero-stat">
                        <span className="stat-num" style={{ color: '#ffd700' }}>5K+</span>
                        <span className="stat-label">Emails Sent</span>
                      </div>
                    </div>
                  </Fade>
                  <Fade direction="up" delay={400} triggerOnce>
                    <p className="hero-desc">
                      Driving 90%+ inbox rates with high-converting campaigns on Mailchimp & Brevo.
                    </p>
                    <div className="home-buttons">
                      <a href="http://api.whatsapp.com/send?phone=03291250747"
                        className='btn btn-hire'
                        style={{ background: 'linear-gradient(135deg,#bf5fff,#7b2fff)', border: 'none' }}
                        rel="noreferrer" target="_blank">
                        Hire Me
                      </a>
                      <a className='btn btn-cv'
                        style={{ color: '#bf5fff', borderColor: '#bf5fff' }}
                        href={Resume} download="MR_Updated_CV.pdf">
                        My Resume
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* RIGHT - Photo */}
                <div className="hero-img-wrap">
                  <div className="hero-img-ring" style={{ borderColor: '#bf5fff' }}></div>
                  <div className="hero-img-frame hero-img-round">
                    <img src={profilePic} alt="Maham Rafiq" />
                  </div>
                  {/* Floating email badges */}
                  <div className="hero-float-badge" style={{ background: 'rgba(191,95,255,0.15)', border: '1px solid #bf5fff', top: '10px', right: '-10px' }}>
                    <span style={{ color: '#bf5fff', fontSize: '11px' }}>✉️ 90% Rate</span>
                  </div>
                  <div className="hero-float-badge" style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid #ffd700', bottom: '30px', left: '-10px' }}>
                    <span style={{ color: '#ffd700', fontSize: '11px' }}>📊 Analytics</span>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>

          {/* ===== SLIDE 3 - AI Creative ===== */}
          <SwiperSlide>
            <div className="hero-slide slide-cyber">
              <ParticlesBg variant="orbs" />
              <div className='container home-content-row'>

                {/* LEFT - Text */}
                <div className="hero-text">
                  <span className="hero-badge" style={{ borderColor: '#00e5ff', color: '#00e5ff', background: 'rgba(0,229,255,0.1)' }}>
                    AI + Design
                  </span>
                  <Fade direction="up" triggerOnce>
                    <h2>Hi 👋 I'm a</h2>
                  </Fade>
                  <Fade direction="up" delay={200} triggerOnce>
                    <h1 style={{ color: '#00e5ff' }}>
                      <Typewriter options={{
                        strings: ['AI-Powered Creative', 'Prompt Engineer', 'Canva Pro Designer'],
                        autoStart: true, loop: true,
                      }} />
                    </h1>
                  </Fade>
                  <Fade direction="up" delay={300} triggerOnce>
                    <div className="hero-tags">
                      <span className="hero-tag" style={{ borderColor: '#00e5ff', color: '#00e5ff' }}>Canva Pro</span>
                      <span className="hero-tag" style={{ borderColor: '#00e5ff', color: '#00e5ff' }}>AI Tools</span>
                      <span className="hero-tag" style={{ borderColor: '#00e5ff', color: '#00e5ff' }}>Vibe Coding</span>
                    </div>
                  </Fade>
                  <Fade direction="up" delay={400} triggerOnce>
                    <p className="hero-desc">
                      Canva Pro expert, AI tools specialist & vibe coder creating stunning digital experiences.
                    </p>
                    <div className="home-buttons">
                      <a href="http://api.whatsapp.com/send?phone=03291250747"
                        className='btn btn-hire'
                        style={{ background: 'linear-gradient(135deg,#00e5ff,#0077b6)', color: '#050510', border: 'none' }}
                        rel="noreferrer" target="_blank">
                        Hire Me
                      </a>
                      <a className='btn btn-cv'
                        style={{ color: '#00e5ff', borderColor: '#00e5ff' }}
                        href={Resume} download="MR_Updated_CV.pdf">
                        My Resume
                      </a>
                    </div>
                  </Fade>
                </div>

                {/* RIGHT - Photo */}
                <div className="hero-img-wrap">
                  <div className="hero-img-ring" style={{ borderColor: '#00e5ff' }}></div>
                  <div className="hero-img-frame">
                    <img src={aiPic} alt="Maham Rafiq" />
                  </div>
                  {/* Floating AI badges */}
                  <div className="hero-float-badge" style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid #00e5ff', top: '10px', right: '-10px' }}>
                    <span style={{ color: '#00e5ff', fontSize: '11px' }}>✦ AI Powered</span>
                  </div>
                  <div className="hero-float-badge" style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid #ffd700', bottom: '30px', left: '-10px' }}>
                    <span style={{ color: '#ffd700', fontSize: '11px' }}>🎨 Designer</span>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </>
  );
};