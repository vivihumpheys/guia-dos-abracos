import React from "react";
import "./styles.css";
import Search from "../../atoms/Search";

const SearchBar = ({ value, placeholder, type, onChange, buttonImg }) => {
  return (
    <div className='searchBar-box'>
      <Search
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
      <button>
        <img alt="button" src={buttonImg}></img>
      </button>
    </div>
  );
};

export default SearchBar;