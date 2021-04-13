import { connect } from "react-redux";
import StockShow from "./stock_show";

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

export default connect(mSTP, null)(StockShow);
