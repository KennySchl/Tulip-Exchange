import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import StocksContainer from "../stocks/stocks_container";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import ProtectedNav from "./prot_nav_bar";

const AuthNavBar = ({ currentUser, logout }) => {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    setUser(currentUser)
 },[])

const handleLogout = () => {
  // window.location.reload();  
  logout();
  setUser(null);
  <Redirect to="/login" />
  };


//  console.log(user);

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
    // return <ProtectedRoute path="/" render={(logout) => <ProtectedNav {...logout}/>} />
    return (
      <div className="protected-navbar">
        <Link to="/">
          <h1 className="website-name-nav">
            <FontAwesomeIcon icon={faLeaf} />
          </h1>
        </Link>
        <StocksContainer />
        <button className="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    );
  }
};

export default AuthNavBar;
