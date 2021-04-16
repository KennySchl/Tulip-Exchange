import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StocksContainer from "../stocks/stocks_container";

const ProtNavBar = ({ logout }) => {
  // console.log(localStorage);

  const handleLogOut = () => {
    localStorage.clear();
    logout();
    location.reload();
  };

  return (
    <div className="protected-navbar">
      <Link to="/">
        <h1 className="website-name-nav">
          <FontAwesomeIcon icon={faLeaf} className="prot-leaf" />
        </h1>
      </Link>
      <StocksContainer />
      <Link to="/" className="logout" onClick={handleLogOut}>
        Log Out
      </Link>
    </div>
  );
};

export default ProtNavBar;
