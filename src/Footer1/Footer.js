import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';
  

     export const Footer = () => {
        return (
          <footer className="footer-container">
            <p>&copy; 2024 - Mi Sitio Web. Todos los derechos reservados.</p>
            <div className="social-icons">
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </footer>
        );
      };
      
 
   