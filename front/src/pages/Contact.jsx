import '../styles/Contact.css';
import profilePhoto from '../assets/profileMe.jpg';
import cvPdf from '../assets/NadjaMarkicevic_CV.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Photo Section */}
        <div className="photo-section">
          <img 
            src={profilePhoto} 
            alt="Profile Photo" 
            className="profile-photo"
          />
        </div>

        {/* Contact Info Section */}
        <div className="info-section">
          <h1>Get in Touch</h1>
          
          <div className="contact-info">
            <div className="info-item">
              <h3>Contact</h3>
              <a href="mailto:nadjamarkicevic@gmail.com">nadjamarkicevic@gmail.com</a> <br />
              <a href="tel:+381655826443">+381 65 5826443</a>
            </div>

            <div className="info-item">
              <h3>🔗 Social</h3>
              <div className="social-links">
                <a href="https://github.com/NaynaCode" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com/in/nadja-markicevic" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            <div className="info-item">
              <h3>Location</h3>
              <p>Belgrade, Serbia</p>
            </div>

            
          </div>
        </div>

        {/* CV Section */}
        <div className="cv-section">
          <h2>Curriculum Vitae</h2>
          
          <div className="cv-viewer">
            <embed 
              src={cvPdf} 
              type="application/pdf" 
              width="100%" 
              height="700px"
            />
          </div>

          <div className="cv-download">
            <a href={cvPdf} download="NadjaMarkicevic_CV.pdf" className="download-btn">
              📥 Download Full CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
