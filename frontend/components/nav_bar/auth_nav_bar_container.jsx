import { connect } from "react-redux";
import AuthNavBar from "./auth_nav_bar";

const mSTP = ({ session: { currentUserId } }) => ({
  currentUser: currentUserId,
});

export default connect(mSTP, null)(AuthNavBar);
