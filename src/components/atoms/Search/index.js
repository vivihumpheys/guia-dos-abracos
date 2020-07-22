import React from "react";
import "./styles.css";

const Search = ({ value, placeholder, type, onChange }) => {
  return (
    <div className="search-box">
      <input
        className="search"
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
