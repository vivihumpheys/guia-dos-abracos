import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";


const NavBar = ({
  navText1,
  navText2,
  navText3,
  linkText1,
  linkText2,
  linkText3,
}) => {
  return (
    <div className='nav-container'>
      <nav className='navItens-box'>
        <Link to={linkText1} className='navItem-hover'>
          <p className='nav-Item'>{navText1}</p>
        </Link>
        <Link to={linkText2} className='navItem-hover'>
          <p className='nav-Item'>{navText2}</p>
        </Link>
        <Link to={linkText3} className='navItem-hover'>
          <p className='nav-Item'>{navText3}</p>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
