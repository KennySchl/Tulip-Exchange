import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StocksContainer from "../stocks/stocks_container";

const ProtNavBar = ({ logout, currentUser }) => {
  const handleLogout = () => {
    window.location.reload();
    logout();
    window.location.reload();
  };
  console.log(logout);
  console.log(currentUser);
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
};

export default ProtNavBar;
