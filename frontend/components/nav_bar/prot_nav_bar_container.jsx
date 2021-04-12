import { connect } from "react-redux";
import ProtNavBar from './prot_nav_bar'
import { logout } from "../../actions/session_actions";

const mSTP = ({ session: { currentUserId } }) => ({
  currentUser: currentUserId,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(ProtNavBar)