import React from "react";
import "./styles.css";

const Card = ({
  projectName,
  projectDescription,
  projectAdress,
  projectLink,
  linkText,
}) => {
  return (
    <div className="card-box">
      <h3 className="card-title">{projectName}</h3>
      <p className="card-description">{projectDescription}</p>
      <p className="card-adress">{projectAdress}</p>
      <a className="card-link" href={projectLink} target="blank">
        {linkText}
      </a>
    </div>
  );
};

export default Card;
