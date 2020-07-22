import React from "react";
import "./styles.css";

const FilterOptions = ({ onClick, filters }) => {
  return (
    <div className="filterOptions-box">
      {filters.map((item, index) => {
        return (
          <div
            onClick={onClick}
            key={`${index + 1}--option`}
            className="filterOptions-filter"
          >
            <h6 className='filterText' id={item}>{item}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
