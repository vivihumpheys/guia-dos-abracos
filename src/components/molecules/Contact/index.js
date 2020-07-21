import React from "react";
import "./styles.css";

const Contact = ({
    contactMsg,
    mailIcon,
    contactMail,
    phoneIcon,
    contactPhone
}) => {
  return (
    <div className="contact-box">
      <h6>{contactMsg}</h6>
      <div className='contact-box--icon'>
        <img alt="mail" src={mailIcon}></img>
        <h8>{contactMail}</h8>
      </div>
      <div className='contact-box--icon'>
        <img alt="phone" src={phoneIcon}></img>
        <h8>{contactPhone}</h8>
      </div>
    </div>
  );
};

export default Contact;
