import { connect } from "react-redux";
import MainPageWatchlist from "./main_page_watchlist";

const mSTP = ({
  entities: {
    users: { watchlists },
  },
}) => ({
  watchlists,
});

export default connect(mSTP, null)(MainPageWatchlist);
