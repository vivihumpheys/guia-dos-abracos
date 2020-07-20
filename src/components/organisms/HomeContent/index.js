import React from "react";
import "./styles.css";
import SearchBar from "../../molecules/SearchBar";
import FilterBar from "../../molecules/FilterBar";

const HomeContent = ({
  value,
  placeholder,
  type,
  onChange,
  buttonImg,
  onClick,
  handleFilters,
  filters,
  children,
}) => {
  return (
    <div className="homeContent-container">
      <section>
        <SearchBar
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          buttonImg={buttonImg}
          onClick={onClick}
        />

        <FilterBar onClick={handleFilters} filters={filters} />
      </section>

      <section>{children}</section>
    </div>
  );
};

export default HomeContent;
