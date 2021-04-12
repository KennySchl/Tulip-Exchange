import { connect } from "react-redux";
import NavBar from "./nav_bar";

const mSTP = ({ session: { currentUserId } }) => ({
  currentUser: currentUserId,
});

const mDTP = (dispatch) => ({});

export default connect(mSTP, null)(NavBar);
