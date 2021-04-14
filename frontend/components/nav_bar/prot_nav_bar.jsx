import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StocksContainer from "../stocks/stocks_container";
import Loader from "react-loader-spinner";

const ProtNavBar = ({ logout, fetchStocks, currentUser }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStocks(window.finnhubAPIKey).then(() => setLoading(false));
    return () => {
      setLoading(true);
    };
  }, [currentUser]);

  const handleLogOut = () => logout();

  if (loading) {
    return (
      <div className="loader">
        <Loader type="Grid" color="rgb(0,200,5)" height={80} width={80} />
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
        <Link to="/" className="logout" onClick={handleLogOut}>
          Log Out
        </Link>
      </div>
    );
  }
};

export default ProtNavBar;
