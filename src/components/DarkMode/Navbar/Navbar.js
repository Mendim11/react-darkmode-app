import React, { useState } from "react";
import "./Navbar.css";
import { FaPhoneAlt } from 'react-icons/fa'; 
import { Carousel } from 'react-responsive-carousel';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsResourcesOpen(false);
  }; 

  const toggleResourcesMenu = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsServicesOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="logo" className="logo1" />
      </div>
      <div className={`navbar-center ${isMenuOpen ? "open" : ""}`}>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#services" onClick={toggleServicesMenu}>
          Services &#9662;
        </a>
        <a href="#resources" onClick={toggleResourcesMenu}>
          Resources &#9662;
        </a>
        <a href="#news" onClick={toggleMenu}>News</a>
        <a href="#careers" onClick={toggleMenu}>Careers</a>
      </div>
      <div className="navbar-right">
        <div className="contact-info">
          <FaPhoneAlt className="phone-icon" />
          <div className="phone-details">
            <span className="phone-number">+383 456 7890</span>
            <span className="call-text">Call our office</span>
          </div>
        </div>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

     

      {isServicesOpen && (
        <div className="services-dropdown">
          <div className="dropdown-left">
            {/* Icon Grid: 4 columns and 3 rows */}
            <div className="icon-grid">
              <div className="icon-item">
                <img src="/law.png" alt="icon1" className="dropdown-icon" />
                <p>Corporate Law</p>
              </div>
              <div className="icon-item">
                <img src="/realestate.png" alt="icon2" className="dropdown-icon" />
                <p>Real Estate</p>
              </div>
              <div className="icon-item">
                <img src="/tax.png" alt="icon3" className="dropdown-icon" />
                <p>Tax & Customs</p>
              </div>
              <div className="icon-item">
                <img src="/public.png" alt="icon4" className="dropdown-icon" />
                <p>Public Procurement</p>
              </div>
              <div className="icon-item">
                <img src="/bank.png" alt="icon5" className="dropdown-icon" />
                <p>Banking & Finance</p>
              </div>
              <div className="icon-item">
                <img src="/insurance.png" alt="icon6" className="dropdown-icon" />
                <p>Insurance</p>
              </div>
              <div className="icon-item">
                <img src="/energy.png" alt="icon7" className="dropdown-icon" />
                <p>Family Law</p>
              </div>
              <div className="icon-item">
                <img src="/family.png" alt="icon8" className="dropdown-icon" />
                <p>Criminal Law</p>
              </div>
              <div className="icon-item">
                <img src="/laptop.png" alt="icon9" className="dropdown-icon" />
                <p>ICT Sector</p>
              </div>
              <div className="icon-item">
                <img src="/labor.png" alt="icon10" className="dropdown-icon" />
                <p>Energy & Infrastructure</p>
              </div>
              <div className="icon-item">
                <img src="/insurance.png" alt="icon11" className="dropdown-icon" />
                <p>Labour & Employment</p>
              </div>
              <div className="icon-item">
                <img src="/criminal.png" alt="icon12" className="dropdown-icon" />
                <p>IP Law</p>
              </div>
            </div>
          </div>
          <div className="dropdown-right">
            <h2>Personal</h2>
            <p>From family law to personal injury, we treat your case with the care it deserves.</p>
            <h2>Business</h2>
            <p>Achieve your business goals with comprehensive legal solutions.</p>
          </div>
        </div>
      )}
      {isResourcesOpen && (
        <div className="resources-dropdown">
          <div className="dropdown-left-resources">
            {/* Left Side with 4 Components */}
            <div className="resources-icon-grid">
              <div className="icon-item">
                <img src="/network.png" alt="network" className="dropdown-icon" />
                <p>Network</p>
              </div>
              <div className="icon-item">
                <img src="/criminal.png" alt="legal notices" className="dropdown-icon" />
                <p>Legal Notices</p>
              </div>
              <div className="icon-item">
                <img src="/scale.png" alt="laws of kosovo" className="dropdown-icon" />
                <p>Laws of Kosovo</p>
              </div>
              <div className="icon-item">
                <img src="/insights.png" alt="contact" className="dropdown-icon" />
                <p>Contact Us</p>
              </div>
              <div className="icon-item">
                <img src="/message.png" alt="contact" className="dropdown-icon" />
                <p>Contact Us</p>
              </div>
              <div className="icon-item">
                <img src="/podcast.png" alt="contact" className="dropdown-icon" />
                <p>Contact Us</p>
              </div>


            </div>
          </div>

          {/* <div className="dropdown-right-resources">
            
            <Carousel showThumbs={false} infiniteLoop={true} showArrows={true} showStatus={false}>
              <div>
                <img src="/collar2.png" alt="slider image 1" />
              </div>
              <div>
                <img src="/temp.png" alt="slider image 2" />
              </div>
           
            </Carousel>
          </div> */}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#services" onClick={toggleServicesMenu}>Services</a>
          <a href="#resources" onClick={toggleResourcesMenu}>Resources</a>
          <a href="#news" onClick={toggleMenu}>News</a>
          <a href="#careers" onClick={toggleMenu}>Careers</a>
          <button className="contact-button" onClick={toggleMenu}>Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
