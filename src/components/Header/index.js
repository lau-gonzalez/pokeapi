import React from "react";
import Search from "../Search";
import "./Header.styles.css";

const Header = ({ setSearchValue }) => {
  return (
    <div className="container navbar">
      <div className="logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
          alt="Pokemon Logo"
          className="img-fluid"
        />
        <h5>an index of Pokemon.</h5>
      </div>

      <Search setValue={setSearchValue} placeholder="Enter pokemon name" />
    </div>
  );
};

export default Header;
