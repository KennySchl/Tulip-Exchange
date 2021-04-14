import { connect } from "react-redux";
import { signUp, clearErrors } from "../../actions/session_actions";
import { fetchStocks } from "../../actions/stocks_actions";

import SignUpForm from "./sign_up_form";

const mSTP = ({ errors }) => ({
  errors: errors.session,
});

const mDTP = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchStocks: () => dispatch(fetchStocks()),
});

export default connect(mSTP, mDTP)(SignUpForm);
