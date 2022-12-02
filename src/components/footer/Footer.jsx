import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer_logo">
        JAYESH PANDAV
      </a>

      <div className="permalink">
        <a href="/#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer_socials">
        <a href="https://www.facebook.com/">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagramSquare />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer_copy">
        <small>&copy; Jayesh Pandav. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
