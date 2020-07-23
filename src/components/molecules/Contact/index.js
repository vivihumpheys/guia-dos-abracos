import React from "react";
import "./styles.css";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = ({ contactMsg, contactMail, contactPhone }) => {
  return (
    <div className="contact-container">
      <h6 className="contactMsg">{contactMsg}</h6>

      <div className="icons-text-box">
        <div className="contact-box--icon">
          <a className="mail-link" href="mailto:guiadosabracos@gmail.com">
            <FiMail className="mail-icon" />
            <h5 className="mail-text">{contactMail}</h5>
          </a>
        </div>

        <div className="contact-box--icon">
          <a
            className="mail-link"
            target="blank"
            href="https://bit.ly/fale-com-o-guia"
          >
            <FaWhatsapp className="mail-icon" />
            <h5 className="mail-text">{contactPhone}</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
