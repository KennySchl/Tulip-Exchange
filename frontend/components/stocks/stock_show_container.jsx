import { connect } from "react-redux";
import StockShow from "./stock_show";

// import {
//   fetchStockCompanyProfileAPI,
//   fetchStockCurrentPriceAPI,
//   fetchStockCompanyNewsAPI,
// } from "../../util/stocks_api_util";

const mSTP = (
  sate,
  {
    match: {
      params: { stockSymbol },
    },
  }
) => ({
  stockSymbol,
});

const mDTP = (dispatch) => ({
  // fetchCompanyProfile: (stockSymbol, APIKey) =>
  //   dispatch(fetchStockCompanyProfileAPI(stockSymbol, APIKey)),
  // fetchCurrentPrice: (stockSymbol, APIKey) =>
  //   dispatch(fetchStockCurrentPriceAPI(stockSymbol, APIKey)),
  // fetchCompanyNews: (stockSymbol, APIKey) =>
  //   dispatch(fetchStockCompanyNewsAPI(stockSymbol, APIKey)),
});

export default connect(mSTP, null)(StockShow);
