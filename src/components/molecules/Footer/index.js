import React from "react";
import "./styles.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = ({ footerText, iconLink1, iconText1, iconLink2, iconText2 }) => {
  return (
    <footer className="footer-box">
      <div className="footerIcons-container">
        <div className="iconText-box">
          <a target="blank" href={iconLink1}>
            <AiFillGithub className="github-icon" />
            {iconText1}
          </a>
        </div>
        <div className="iconText-box">
          <a target="blank" href={iconLink2}>
            <FaLinkedin className="github-icon" />
            {iconText2}
          </a>
        </div>
      </div>

      <p className="footer-text">{footerText}</p>
    </footer>
  );
};

export default Footer;
