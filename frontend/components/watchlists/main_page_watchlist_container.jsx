import { connect } from "react-redux";
import MainPageWatchlist from "./main_page_watchlist";

const mSTP = ({
  entities: {
    users: { watchlists },
  },
}) => ({
  watchlists,
});

const mDTP = (dispatch) => {};

export default connect(mSTP, null)(MainPageWatchlist);
