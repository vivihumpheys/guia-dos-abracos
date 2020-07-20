import React from "react";
import "./styles.css";
import SearchBar from "../../molecules/SearchBar";
import FilterBar from "../../molecules/FilterBar";
import Card from "../../molecules/Card";

const HomeContent = ({
  value,
  placeholder,
  type,
  onChange,
  buttonImg,
  onClick,
  handleFilters,
  filters,
  projectName,
  projectDescription,
  projectAdress,
  projectLink,
  linkText,
}) => {
  return (
    <div className="homeContent-container">
      <SearchBar
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        buttonImg={buttonImg}
        onClick={onClick}
      />

      <FilterBar onClick={handleFilters} filters={filters} />

      <Card
        projectName={projectName}
        projectDescription={projectDescription}
        projectAdress={projectAdress}
        projectLink={projectLink}
        linkText={linkText}
      />
    </div>
  );
};
