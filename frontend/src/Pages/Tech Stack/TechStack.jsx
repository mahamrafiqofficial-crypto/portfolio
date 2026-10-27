import React from 'react'
import "./TechStack.css";
import { Zoom } from 'react-awesome-reveal';
import { techstacklist } from '../../utils/Techstacklist';
import { ParticlesBg } from '../../Components/ParticlesBg'; // 👈 add karo

export const TechStack = () => {
  return (
    <>
    {/* 👇 position relative add karo */}
    <div className='container techstack' id="techstack" style={{ position: 'relative' }}>

      {/* 👇 yeh add karo */}
      <ParticlesBg variant="matrix" />

      {/* 👇 zIndex add karo */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technologies Stack</h2>
        <p className='pb-3 text-center'>
          👉 Including programming Languages, framworks, databases, front-end and back-end tools and APIs
        </p>

        <div className='row'>
          {techstacklist.map((tech) => (
            <div key={tech._id} className='col-md-3'>
              <Zoom triggerOnce cascade damping={0.1}>
                <div className='card m-2'>
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <tech.icon className='tech-icon' />
                      </div>
                      <div className='media-body'>
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
          ))}
        </div>
      </div>

    </div>
    </>
  )
}