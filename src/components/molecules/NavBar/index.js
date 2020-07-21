import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const NavBar = ({ navText1, navText2, navText3, linkText1, linkText2, linkText3}) => {
  return (
    <nav>
      <Link to={linkText1}>
        <p>{navText1}</p>
      </Link>
      <Link to={linkText2}>
        <p>{navText2}</p>
      </Link>
      <Link to={linkText3}>
        <p>{navText3}</p>
      </Link>
    </nav>
  );
};

export default NavBar;
