// src/Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/refund-policy">Refund Policy</a></li>
        <li><a href="/website-policy">Website Policy</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/career">Career</a></li>
        <li><a href="/rentals">Rentals</a></li>
        <li><a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        <li><a href="https://www.linkedin.com/company/your-company-link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
