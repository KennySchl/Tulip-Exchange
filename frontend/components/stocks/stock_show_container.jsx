import { connect } from "react-redux";
import StockShow from "./stock_show";

const mSTP = (
  {
    entities: {
      stocks,
      users: { watchlists },
    },
    session: { currentUserId },
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
  currentUserId,
});

export default connect(mSTP, null)(StockShow);
