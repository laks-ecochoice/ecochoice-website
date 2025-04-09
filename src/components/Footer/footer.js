import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaMobileAlt,
  FaGlobe,
  FaEnvelope,
  FaLinkedin,
  FaPlay,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Left Section - Logo & Info */}
      <div className="footer-left">
        <img src="/logo1.png" alt="Company Logo" className="footer-logo" />
        <h2>Ecochoice Techologies</h2>
        <p className="slogan">Division of Ecochoice Naturals Pvt. Ltd.</p>
      </div>

      {/* Middle Section - Pages */}
      <div className="footer-middle">
        <h3>Pages</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/solutions">Our SOlution</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/?scrollTo=contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Right Section - Contact */}
      <div className="footer-right">
        <h3>Contact Us</h3>
        <p>
          <FaMapMarkerAlt /> 2nd Floor, 100 Feet Rd, near Sony Centre, HAL 2nd
          Stage, Indiranagar, Bengaluru, Karnataka 560008,India
        </p>
        <p>
          <FaMobileAlt /> +91 7975690535
        </p>
        <p>
          <FaPhoneAlt /> 080-25283020
        </p>
        <p>
          <FaGlobe />{" "}
          <a
            href="https://ecochoice.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ecochoicenaturals.com
          </a>
        </p>
        <p>
          <FaEnvelope />{" "}
          <a href="mailto:info@ecochoice.com">info@ecochoice.com</a>
        </p>

        <div className="footer-social">
          <a
            href="https://play.google.com/store/apps/details?id=in.ecochoice.raithasahayak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPlay /> Play Store
          </a>
          <a
            href="https://in.linkedin.com/company/ecochoicenaturals"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
