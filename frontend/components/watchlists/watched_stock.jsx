import React from "react";
import { connect } from "react-redux";

const WatchedStock = ({ stocks, items: { stockId } }) => {
  const allStocksArr = Object.values(stocks);
  return <div>{allStocksArr[stockId - 1].symbol}</div>;
};

const mSTP = ({ entities: { stocks }, ownProps }) => ({ stocks, ownProps });
export default connect(mSTP, null)(WatchedStock);
