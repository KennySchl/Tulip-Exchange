import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const WatchedStock = ({ stocks, listStatus, items: { stockId } }) => {
  const stock = Object.values(stocks).find((stock) => stockId === stock.id);

  if (!listStatus) {
    return <div></div>;
  } else {
    return (
      <Link to={`/stocks/${stock.symbol}`}>
        <div className="watched-stock-name">{stock.symbol}</div>
      </Link>
    );
  }
};

const mSTP = ({ entities: { stocks }, ownProps }) => ({ stocks, ownProps });
export default connect(mSTP, null)(WatchedStock);
