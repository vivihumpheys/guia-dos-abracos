import React from "react";
import "./styles.css";
import SearchBar from "../../molecules/SearchBar";
import FilterBar from "../../molecules/FilterBar";

const HomeContent = ({
  value,
  placeholder,
  type,
  onChange,
  onClick,
  handleFilters,
  filters,
  children,
  errorMsg,
}) => {
  return (
    <div className="homeContent-container">
      <section className="search-filter-box">
        <p className="subtitle-home">
          Encontre um projeto social perto de você!
        </p>
        <SearchBar
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          onClick={onClick}
        />

        <p className="errorMsg">{errorMsg}</p>
        <FilterBar onClick={handleFilters} filters={filters} />
      </section>

      <section className="cards-box">{children}</section>
    </div>
  );
};

export default HomeContent;
