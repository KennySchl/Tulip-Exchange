import { connect } from "react-redux";
import ProtNavBar from "./prot_nav_bar";
import { logout } from "../../actions/session_actions";
import { fetchAllStocksAPI } from "../../actions/stocks_actions";

const mSTP = ({ session: { currentUserId }, entities: { stocks } }) => ({
  currentUser: currentUserId,
  stocks: stocks,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchStocks: (APIKey) => dispatch(fetchAllStocksAPI(APIKey)),
});

export default connect(mSTP, mDTP)(ProtNavBar);
