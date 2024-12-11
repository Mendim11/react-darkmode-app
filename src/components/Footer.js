import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/whitelogo.png" alt="Logo" className="footer-logo" />
        <p>LEGAL EXCELLENCE</p>
        <p>Subscribe to our Newsletter</p>
        
        
        <input
          type="email"
          placeholder="Enter your email"
          className="footer-input"
        />
        <button className="subscribe-button">Subscribe</button>

        <div className="contact-info1">
          <FaPhoneAlt className="phone-icon1" />
          <div className="phone-details1">
            <span className="phone-number1">+383 456 7890</span>
            <span className="call-text1">Call our office</span>
          </div>
          <div className="socialmedia">
            CONNECT WITH US:{" "}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <h2>ABOUT</h2>
        <h4>Our Story</h4>
        <h4>Our Team</h4>
        <h4>Careers</h4>
        <h4>Clients & Partners</h4>
      </div>
      <div className="footer-section">
        <h2>SERVICES</h2>
        <h4>Practice Area</h4>
        <h4>Solutions</h4>
        <h4>Legal Tech</h4>
        <h4>Case Studies</h4>
      </div>
      <div className="footer-section">
        <h2>RESOURCES</h2>
        <h4>Contact Us</h4>
        <h4>Latest News</h4>
        <h4>Insights</h4>
        <h4>Legal Notices</h4>
      </div>

     
      <div className="footer-bottom">
        <hr className="footer-line" />

       
        <div className="footer-bottom-content">
          <p className="footer-bottom-left">© 2024 LawKos. All rights reserved.</p>
          <p className="footer-bottom-center">Privacy Policy | Terms & Conditions</p>
          <div className="footer-bottom-right">
          
          <input class="dark_mode_input" type="checkbox" id="darkmode-toggle"></input>
            <label className="dark_mode_label" for="darkmode-toggle"></label>
           
            <select className="language-select">
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
