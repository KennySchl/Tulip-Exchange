import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const WatchedStock = ({ stocks, listStatus, items: { stockId } }) => {
  const allStocksArr = Object.values(stocks);

  if (!listStatus) {
    return <div></div>;
  } else {
    return (
      <Link to={`/stocks/${allStocksArr[stockId - 1].symbol}`}>
        <div className="watched-stock-name">
          {allStocksArr[stockId - 1].symbol}
        </div>
      </Link>
    );
  }
};

const mSTP = ({ entities: { stocks }, ownProps }) => ({ stocks, ownProps });
export default connect(mSTP, null)(WatchedStock);
