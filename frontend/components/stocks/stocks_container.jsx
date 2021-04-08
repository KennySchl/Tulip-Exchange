import React from "react";
import { connect } from "react-redux";
import { fetchAllStocksAPI } from "../../actions/stocks_actions";
import Stocks from "./stocks";

const mSTP = ({stocks}) => ({
  //not sure if needed
  stocks: stocks
});

const mDTP = (dispatch) => ({
  fetchAllStocksAPI: (APIKey) => dispatch(fetchAllStocksAPI(APIKey)),
});

export default connect(mSTP, mDTP)(Stocks);
