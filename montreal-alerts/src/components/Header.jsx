
import React from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure this file contains your updated CSS
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <FaBars />
        </button>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo de la Ville" />
        </div>
      </div>
      <div className="header-right">
        <button className="search-button">
          <FaSearch />
        </button>
        <Link to="#" className="account-button">
          <FaUserCircle className="account-icon" />
          Mon Compte
        </Link>
      </div>
    </header>
  );
};
export default Header;