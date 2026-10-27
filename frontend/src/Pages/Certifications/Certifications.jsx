import React, { useState } from 'react';
import './Certifications.css';
import { Fade, Zoom } from 'react-awesome-reveal';
import { IoClose } from "react-icons/io5";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const certificatesData = [
    {
        id: 1,
        name: "Linux Essentials",
        institute: "CISCO",
        logo: "/images/logos/cisco.png",
        images: [
            "/images/certificates/cisco-badge.png.png",
            "/images/certificates/cisco-cert-1.jpg",
            "/images/certificates/cisco-cert-2.jpg"
        ],
        color: "#00bceb"
    },
    {
        id: 2,
        name: "IT Specialist JavaScript",
        institute: "Pearson",
        logo: "/images/logos/pearson-logo.png",
        images: [
            "/images/certificates/pearson-badge.png",
            "/images/certificates/pearson-cert.png"
        ],
        color: "#e31837"
    },
    {
        id: 3,
        name: "MERN Stack Developer",
        institute: "NAVTTC",
        logo: "/images/logos/NAVTTC.jpg",
        images: ["/images/certificates/navttc-cert.png"],
        color: "#1a6b3c"
    },
    {
        id: 4,
        name: "Freelancing",
        institute: "PFTF",
        logo: "/images/logos/PFTF.png",
        images: ["/images/certificates/pftf-cert.jpeg"],
        color: "#ff6b35"
    },
    {
        id: 5,
        name: "Web Development Internship",
        institute: "Code Cryptical",
        logo: "/images/logos/code cryptical.jpg",
        images: ["/images/certificates/codecryptical-cert.png"],
        color: "#6c63ff"
    },
    {
        id: 6,
        name: "MERN Stack Internship",
        institute: "10Pearls Shine",
        logo: "/images/logos/10 pearls.png",
        images: ["/images/certificates/10pearls-cert.jpg"],
        color: "#ffd700"
    },
    {
        id: 7,
        name: "Research Certificate",
        institute: "Tech Xplore Conference",
        logo: "/images/logos/Informatics.jpg",
        images: ["/images/certificates/techxplore-cert.png"],
        color: "#00e5ff"
    },
    {
        id: 8,
        name: "Scholarship Certificate",
        institute: "PEEF",
        logo: "/images/logos/PEEF.jpg",
        images: ["/images/certificates/peef-cert.png"],
        color: "#00ff88"
    },
    {
        id: 9,
        name: "Email Marketing Course",
        institute: "Dream Seller Institute",
        logo: "/images/logos/Dream Seller.png",
        images: ["/images/certificates/emailmarketing-cert.png"],
        color: "#ff5f9e"
    }
];

const logosList = [
    { name: "CISCO", logo: "/images/logos/cisco.png" },
    { name: "Pearson", logo: "/images/logos/pearson-logo.png" },
    { name: "NAVTTC", logo: "/images/logos/NAVTTC.jpg" },
    { name: "PFTF", logo: "/images/logos/PFTF.png" },
    { name: "Code Cryptical", logo: "/images/logos/code cryptical.jpg" },
    { name: "10Pearls", logo: "/images/logos/10 pearls.png" },
    { name: "Informatics", logo: "/images/logos/Informatics.jpg" },
    { name: "PEEF", logo: "/images/logos/PEEF.jpg" },
    { name: "Dream Seller", logo: "/images/logos/Dream Seller.png" },
    // Duplicate for infinite scroll
    { name: "CISCO", logo: "/images/logos/cisco.png" },
    { name: "Pearson", logo: "/images/logos/pearson-logo.png" },
    { name: "NAVTTC", logo: "/images/logos/NAVTTC.jpg" },
    { name: "PFTF", logo: "/images/logos/PFTF.png" },
    { name: "Code Cryptical", logo: "/images/logos/code cryptical.jpg" },
    { name: "10Pearls", logo: "/images/logos/10 pearls.png" },
    { name: "Informatics", logo: "/images/logos/Informatics.jpg" },
    { name: "PEEF", logo: "/images/logos/PEEF.jpg" },
    { name: "Dream Seller", logo: "/images/logos/Dream Seller.png" },
];

export const Certifications = () => {
    const [lightbox, setLightbox] = useState(null);
    const [currentImg, setCurrentImg] = useState(0);

    const openLightbox = (cert) => {
        setLightbox(cert);
        setCurrentImg(0);
    };

    const closeLightbox = () => {
        setLightbox(null);
        setCurrentImg(0);
    };

    const prevImg = () => {
        setCurrentImg((prev) =>
            prev === 0 ? lightbox.images.length - 1 : prev - 1
        );
    };

    const nextImg = () => {
        setCurrentImg((prev) =>
            prev === lightbox.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <>
        <div className='certifications-section' id="certifications">

            <Fade direction="up" triggerOnce>
                <h2 className='cert-heading col-12 mt-3 mb-1 text-center text-uppercase'>
                    Certifications & Achievements
                </h2>
                <hr className='cert-hr' />
                <p className='text-center cert-subtext'>
                    🏆 Certified by top institutes proving skills with real credentials
                </p>
            </Fade>

            {/* LOGO SCROLLER */}
            <Fade direction="up" triggerOnce delay={200}>
                <div className='logo-scroller-wrap'>
                    <div className='logo-scroller-track'>
                        {logosList.map((item, index) => (
                            <div key={index} className='logo-scroller-item'>
                                <img src={item.logo} alt={item.name} />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>

            {/* CERTIFICATE CARDS */}
            <div className='cert-cards-container'>
                <div className='row'>
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className='col-md-4 col-sm-6 mb-4'>
                            <Zoom triggerOnce cascade damping={0.1}>
                                <div
                                    className='cert-card'
                                    style={{ '--cert-color': cert.color }}
                                    onClick={() => openLightbox(cert)}
                                >
                                    {cert.images.length > 1 && (
                                        <div className='cert-count-badge'>
                                            {cert.images.length} items
                                        </div>
                                    )}
                                    <div className='cert-logo-wrap'>
                                        <img
                                            src={cert.logo}
                                            alt={cert.institute}
                                            className='cert-logo'
                                        />
                                    </div>
                                    <div className='cert-info'>
                                        <h5 className='cert-name'>{cert.name}</h5>
                                        <p className='cert-institute'>{cert.institute}</p>
                                    </div>
                                    <div className='cert-btn'>
                                        View Certificate
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX */}
            {lightbox && (
                <div className='lightbox-overlay' onClick={closeLightbox}>
                    <div className='lightbox-box' onClick={(e) => e.stopPropagation()}>
                        <button className='lightbox-close' onClick={closeLightbox}>
                            <IoClose size={28} />
                        </button>
                        <h4 className='lightbox-title'>{lightbox.name}</h4>
                        <p className='lightbox-institute'>{lightbox.institute}</p>
                        <div className='lightbox-img-wrap'>
                            <img
                                src={lightbox.images[currentImg]}
                                alt={lightbox.name}
                                className='lightbox-img'
                            />
                        </div>
                        {lightbox.images.length > 1 && (
                            <div className='lightbox-nav'>
                                <button className='lightbox-arrow' onClick={prevImg}>
                                    <MdArrowBackIos size={22} />
                                </button>
                                <span className='lightbox-counter'>
                                    {currentImg + 1} / {lightbox.images.length}
                                </span>
                                <button className='lightbox-arrow' onClick={nextImg}>
                                    <MdArrowForwardIos size={22} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
        </>
    );
};