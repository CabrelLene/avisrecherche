
import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
const SearchBar = ({ searchValue, setSearchValue, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };
  return (
    <form className="ultramodern-searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search...."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};
export default SearchBar;
