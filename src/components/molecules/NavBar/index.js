import React from "react";
import "./styles.css";

const NavBar = ({
    navText1,
    navText2,
    navText3
}) => {
  return (
    <nav>
      <div className= 'nav-itens'>
        <p>{navText1}</p>
        <p>{navText2}</p>
        <p>{navText3}</p>
      </div>
    </nav>
  );
};

export default NavBar;
