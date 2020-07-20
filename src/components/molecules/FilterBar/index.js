import React from "react";
import "./styles.css";
import FilterOptions from "../../atoms/FilterOptions";

const FilterBar = ({ onClick, filters }) => {
  return (
    <div className="filterBar-container">
      <FilterOptions onClick={onClick} filters={filters} />
    </div>
  );
};

export default FilterBar;
