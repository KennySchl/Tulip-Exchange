import React from "react";
import { connect } from "react-redux";

const WatchedStock = ({ stocks, listStatus, items: { stockId } }) => {
  const allStocksArr = Object.values(stocks);

  if (!listStatus) {
    return <div></div>;
  } else {
    return (
      <div className="watched-stock-name">
        {allStocksArr[stockId - 1].symbol}
      </div>
    );
  }
};

const mSTP = ({ entities: { stocks }, ownProps }) => ({ stocks, ownProps });
export default connect(mSTP, null)(WatchedStock);
