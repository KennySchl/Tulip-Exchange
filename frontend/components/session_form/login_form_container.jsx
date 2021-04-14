import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import { fetchStocks } from "../../actions/stocks_actions";
import LoginForm from "./login_form";

const mSTP = ({ errors }) => ({
  errors: errors.session,
});

const mDTP = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchStocks: () => dispatch(fetchStocks()),
});

export default connect(mSTP, mDTP)(LoginForm);
