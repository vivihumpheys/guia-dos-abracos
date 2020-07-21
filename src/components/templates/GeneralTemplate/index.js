import React from "react";
import "./styles.css";
import NavBar from "../../molecules/NavBar";
import MainLogo from "../../atoms/MainLogo";
import Footer from "../../molecules/Footer";
import mainLogo from "../../../assets/logo-guia-dos-abracos.png";


const GeneralTemplate = ({
  imgLogo,
  footerText,
  children
}) => {
  return (
    <div className='generalTemplate-container'>
     
      <NavBar 
      navText1='Home'
      linkText1='/'
      navText2='Sobre'
      linkText2='/sobre'
      navText3='Participe'
      linkText3='/participe'
      />
    
      <MainLogo imgLogo= {mainLogo} />
      {children}
      <Footer footerText="Desenvolvido com React por Viviane Miranda | 2020" />
    </div>
  );
};

export default GeneralTemplate;
