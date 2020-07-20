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
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
      <p>{projectAdress}</p>
      <a href={projectLink}>{linkText}</a>
    </div>
  );
};

export default Card;
