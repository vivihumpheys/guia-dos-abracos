import React from "react";
import "./styles.css";
import NavBar from "../../molecules/NavBar";
import MainLogo from "../../atoms/MainLogo";
import Footer from "../../molecules/Footer";

const GeneralTemplate = ({
  navText1,
  navText2,
  navText3,
  imgLogo,
  footerText,
  children
}) => {
  return (
    <div className='generalTemplate-container'>
      <NavBar navText1={navText1} navText2={navText2} navText3={navText3} />
      <MainLogo imgLogo={imgLogo} />
      {children}
      <Footer footerText={footerText} />
    </div>
  );
};

export default GeneralTemplate;
