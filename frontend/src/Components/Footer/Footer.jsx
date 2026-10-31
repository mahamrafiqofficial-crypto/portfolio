import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h3>Maham Rafiq</h3>
          <p>Backend developer focused on building clean, reliable web applications.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/maham-rafiq-662018294/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mahamrafiqofficial-crypto" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:mahamrafiq.official@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <p className="footer-heading">Navigate</p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p className="footer-heading">Get in touch</p>
          <span><FaEnvelope /> mahamrafiq.official@gmail.com</span>
          <span><FaMapMarkerAlt /> Faisalabad, Pakistan</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Maham Rafiq. All rights reserved.</p>
        <p>Built with <FaHeart className="heart-icon" /> using React</p>
      </div>
    </footer>
  );
}