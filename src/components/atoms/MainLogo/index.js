import React from "react";
import "./styles.css";

const MainLogo = ({
    imgLogo
}) => {
  return (
    <div className='mainLogo-box'>
      <img alt='logo-principal' className='mainLogo' src={imgLogo}></img>
    </div>
  );
};

export default MainLogo;