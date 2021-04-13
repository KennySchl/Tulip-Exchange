import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StocksContainer from "../stocks/stocks_container";
import Loader from "react-loader-spinner";
import { fetchStock } from "../../util/stocks_api_util";

const ProtNavBar = ({ logout, currentUser, stocks, fetchStocks}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStocks(window.finnhubAPIKey);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    window.location.reload();
    logout();
    window.location.reload();
  };
  console.log(logout);
  console.log(currentUser);
  console.log(stocks);

  if (loading) {
    return (
      <div>
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
        <button className="logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    );
  }

  // return (
  //   <div>
  //   <div className="protected-navbar">
  //     <Link to="/">
  //       <h1 className="website-name-nav">
  //         <FontAwesomeIcon icon={faLeaf} />
  //       </h1>
  //     </Link>
  //     <StocksContainer />
  //     <button className="logout" onClick={handleLogout}>
  //       Log Out
  //     </button>

  //   </div>
  //   <Loader type="Grid" color="rgb(0,200,5)" height={80} width={80} />
  //   </div>
  // );
};

export default ProtNavBar;
