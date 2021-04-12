import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="auth-navbar">
      <Link to="/">
        <h1 className="website-name-nav">
          Tulip Exchange <FontAwesomeIcon icon={faLeaf} />
        </h1>
      </Link>
      <div className="auth-navbar-links">
        <Link to="/login" className="auth-navbar-login">
          Log In
        </Link>
        <Link to="/signup" className="auth-navbar-signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
