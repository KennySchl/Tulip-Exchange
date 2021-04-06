import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/session_actions";

import SessionForm from "./session_form";

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: "Sign Up",
  //Link to login instead
  //Already started?
  //<Link ... "Log in instea"
});

const mDTP = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});

export default connect(mSTP, mDTP)(SessionForm)