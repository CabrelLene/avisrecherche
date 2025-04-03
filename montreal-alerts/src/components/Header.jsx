
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // Make sure react-icons is installed
import "./Header.css";
const Header = () => {
  return (
    <header className="ultramodern-header">
      <div className="header-container">
        <div className="logo">
          {/* Replac the src with your logo image */}
          <img src="/images/logo.png" alt="City Logo" />
        </div>
        <nav className="nav-menu">
          <Link to="#" className="account-link">
            <FaUserCircle className="account-icon" />
            Mon Compte
          </Link>
          {/* You can add more navigation links here if needed */}
        </nav>
      </div>
    </header>
  );
};
export default Header;
