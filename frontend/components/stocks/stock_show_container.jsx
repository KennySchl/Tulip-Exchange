import { connect } from "react-redux";
import StockShow from "./stock_show";

const mSTP = (
  {
    entities: {
      stocks,
      users: { watchlists },
    },
  },
  {
    match: {
      params: { stockSymbol },
    },
  }
) => ({
  stocks,
  watchlists,
  stockSymbol,
});

export default connect(mSTP, null)(StockShow);
