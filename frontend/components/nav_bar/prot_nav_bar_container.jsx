import { connect } from "react-redux";
import ProtNavBar from "./prot_nav_bar";
import { logout } from "../../actions/session_actions";
import { fetchStocks } from "../../actions/stocks_actions";
import { fetchWatchlists } from "../../actions/watchlists_actions";

const mSTP = ({ session: { currentUserId }, entities: { stocks } }) => ({
  currentUserId: currentUserId,
  stocks: stocks,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchStocks: () => dispatch(fetchStocks()),
  fetchWatchlists: (userId) => dispatch(fetchWatchlists(userId)),
});

export default connect(mSTP, mDTP)(ProtNavBar);
