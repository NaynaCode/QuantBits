import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Links Section */}
        <div className="footer-content">
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/technical-analysis">Technical Analysis</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/NaynaCode" target="_blank" rel="noopener noreferrer">
                <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com/in/nadja-markicevic" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={28} />
                </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href="mailto:nadjamarkicevic@gmail.com">nadjamarkicevic@gmail.com</a>
            </p>
            <p>
              <a href="tel:+1234567890">+381 65 5826443</a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} QuantBits. All rights reserved.
          </p>
          <p className="disclaimer">
            Disclaimer: This platform is for educational purposes only. Always conduct your own research before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
