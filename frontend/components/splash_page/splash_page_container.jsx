import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SplashPage from "./splash_page";

const mSTP = ({ errors }) => ({
  errors: errors.session,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default connect(null, mDTP)(SplashPage);
