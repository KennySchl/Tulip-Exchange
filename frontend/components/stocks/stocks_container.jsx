import { connect } from "react-redux";
// import { fetchAllStocksAPI } from "../../actions/stocks_actions";
import Stocks from "./stocks";

const mSTP = ({ entities: { stocks } }) => ({
  stocks: stocks,
});

const mDTP = (dispatch) => ({
  // fetchStocks: (APIKey) => dispatch(fetchAllStocksAPI(APIKey)),
});

export default connect(mSTP, null)(Stocks);
