import { connect } from "react-redux";
import { fetchWatchlists } from "../../actions/watchlists_actions";
import MainPageWatchlist from "./main_page_watchlist";

const mSTP = ({
  entities: {
    users: { watchlists },
  },
  session: { currentUserId },
}) => ({
  watchlists,
  currentUserId,
});

const mDTP = dispatch => ({
  fetchWatchlists: (userId) => dispatch(fetchWatchlists(userId))
})

export default connect(mSTP, mDTP)(MainPageWatchlist);
