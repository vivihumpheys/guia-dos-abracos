import React from "react";
import "./styles.css";
import Search from "../../atoms/Search";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({
  value,
  placeholder,
  type,
  onChange,

  onClick,
}) => {
  return (
    <div className='searchBar-container'>
    <div className="searchBar-box">
      <Search
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
      <BsSearch onClick={onClick} className="search-button" />
    </div>
    </div>
  );
};

export default SearchBar;
