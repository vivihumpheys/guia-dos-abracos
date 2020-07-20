import React from "react";
import "./styles.css";

const Search = ({ value, placeholder, type, onChange }) => {
  return (
    <input
      className="search"
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};

export default Search;