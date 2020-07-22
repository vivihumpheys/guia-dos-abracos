import React from "react";
import "./styles.css";

const Footer = ({ footerText }) => {
  return (
    <footer className='footer-box'>
      <p className='footer-text'>{footerText}</p>
    </footer>
  );
};

export default Footer;
