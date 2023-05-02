import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
        <div className="footer-content">
          <p>&copy; 2023 Chef's Recipes. All rights reserved.</p>
          <nav>
            
              <a href="/">Home</a>
              <a href="/recipes">Recipes</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            
          </nav>
        </div>
        <div className="footer-disclaimer">
          <p>This website is for educational purposes only. The recipes featured here are not intended to replace professional cooking advice and should be prepared at your own risk.</p>
        </div>
      </footer>
    );
};

export default Footer;