import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/session_actions";

import SignUpForm from "./sign_up_form";

const mSTP = ({ errors }) => ({
  errors: errors.session,
});

const mDTP = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});

export default connect(mSTP, mDTP)(SignUpForm)