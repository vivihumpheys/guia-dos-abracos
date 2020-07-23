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
            href="https://api.whatsapp.com/send?phone=5511961630349&text=Ol%C3%A1%2C%20bem-vindo%20ao%20Guia%20dos%20Abra%C3%A7os!%20Como%20podemos%20te%20ajudar%3F"
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
