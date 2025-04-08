
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";  // Make sure this file exists and is imported
const SearchBar = ({ searchValue, setSearchValue, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Que cherchez-vous?"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
};
export default SearchBar;