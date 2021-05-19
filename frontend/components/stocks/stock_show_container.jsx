import { connect } from "react-redux";
import {
  createWatchlistItem,
  deleteWatchlistItem,
  fetchWatchlists,
} from "../../actions/watchlists_actions";
import StockShow from "./stock_show";

const mSTP = (
  { entities: { stocks, watchlists }, session: { currentUserId } },
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

const mDTP = (dispatch) => ({
  fetchWatchlists: (userId) => dispatch(fetchWatchlists(userId)),
  deleteWatchlistItem: (userId, watchlistId, listItemId) =>
    dispatch(deleteWatchlistItem(userId, watchlistId, listItemId)),
  createWatchlistItem: (userId, watchlistId, data) =>
    dispatch(createWatchlistItem(userId, watchlistId, data)),
});

export default connect(mSTP, mDTP)(StockShow);
