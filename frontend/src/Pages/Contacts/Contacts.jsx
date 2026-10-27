import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import "./Contacts.css";
import { Fade } from 'react-awesome-reveal';
import axios from 'axios';

export const Contacts = () => {

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Loading aur response state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill all fields!');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/portfolio/sendEmail`,
        formData
      );

      if (data.success) {
        setSuccess('✅ Message sent successfully! I will reply soon.');
        setFormData({ name: '', email: '', message: '' });
      }

    } catch (err) {
      setError('❌ Something went wrong. Please try again.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className='contact' id="contact">
        <div className="card card0 border-0">
            <Fade direction="left" triggerOnce>
            <div className="row g-0">

                {/* LEFT SIDE - Image */}
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1 h-100">
                        <img src="/images/contact-us.avif" alt="contact" 
                            className='img-fluid w-100 h-100' 
                            style={{objectFit:'cover'}} />
                    </div>
                </div>
            
                {/* RIGHT SIDE - Form */}
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card2 card border-0 px-4 py-5">

                        {/* Icons row */}
                        <div className="row mb-3">
                            <div className="col-12">
                                <h3 className="contact-title">Contact with 
                                    <a href="https://www.linkedin.com/in/maham-rafiq-662018294/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin color="blue" className='linkedin-icon' />
                                    </a>
                                    <a href="https://github.com/mahamrafiqofficial-crypto" 
                                        target="_blank" rel="noopener noreferrer">
                                        <IoLogoGithub color='black' className='github-icon' />
                                    </a>
                                </h3> 
                            </div>
                        </div>

                        {/* OR divider */}
                        <div className="row mb-3">
                            <div className="col-12">
                                <div className="or-divider">
                                    <span className="or-text">OR</span>
                                </div>
                            </div>
                        </div>

                        {/* Success/Error Messages */}
                        {success && (
                            <div className="alert-success mb-3">
                                {success}
                            </div>
                        )}
                        {error && (
                            <div className="alert-error mb-3">
                                {error}
                            </div>
                        )}

                        {/* Input fields */}
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <input 
                                    type="text" 
                                    name='name' 
                                    placeholder='Write your Name' 
                                    className='form-control'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <input 
                                    type="email" 
                                    name='email' 
                                    placeholder='Write your Email' 
                                    className='form-control'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <textarea 
                                    name='message' 
                                    placeholder='Write your Message' 
                                    className='form-control'
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <button 
                                    type="submit"
                                    className='btn-submit w-100'
                                    disabled={loading}
                                >
                                    {loading ? '⏳ Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </div>
                        </form>

                    </div>
                </div>

            </div>
            </Fade>
        </div>
    </div>
    </>
  )
}