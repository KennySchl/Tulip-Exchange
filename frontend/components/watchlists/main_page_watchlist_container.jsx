import { connect } from "react-redux";
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

export default connect(mSTP, null)(MainPageWatchlist);
