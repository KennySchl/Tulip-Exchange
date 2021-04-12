import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StocksContainer from "../stocks/stocks_container";
import { logout } from "../../util/session_api_util";



const NavBar = ({ currentUser }) => {
  if (currentUser === null) {
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
  } else {
    return (
      <div className="protected-navbar">
        <Link to="/">
          <h1 className="website-name-nav">
            <FontAwesomeIcon icon={faLeaf} />
          </h1>
        </Link>
        <StocksContainer />
        <button className="logout" onClick={logout}>Log Out</button>
      </div>
    );
  }
};

export default NavBar;
