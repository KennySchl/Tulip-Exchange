import { connect } from "react-redux";
import StockShow from "./stock_show";

const mSTP = (
  state,
  {
    match: {
      params: { stockSymbol },
    },
  }
) => ({
  stockSymbol,
});

export default connect(mSTP, null)(StockShow);
