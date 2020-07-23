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
      navText1='home'
      linkText1='/'
      navText2='sobre'
      linkText2='/sobre'
      navText3='participe'
      linkText3='/participe'
      />
    
      <MainLogo imgLogo= {mainLogo} />
      {children}
      <Footer 
      footerText="Desenvolvido com suor, lágrimas e React por Viviane Miranda | Pandemia de 2020"
      iconLink1='https://github.com/vivihumpheys/'
      iconText1='meu Github'
      iconLink2='https://www.linkedin.com/in/vivianehfm/'
      iconText2='meu Linkedin'
      
       />
    </div>
  );
};

export default GeneralTemplate;
