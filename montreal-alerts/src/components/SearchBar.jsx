
import React from "react";
const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Que cherchez-vous?"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Rechercher
      </button>
    </form>
  );
};
export default SearchBar;