import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const signUp = (user) => (dispatch) =>
  APIUtil.signUp(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  );

export const login = (user) => (dispatch) =>
  APIUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const clearErrors = () => (dispatch) => dispatch(clearSessionErrors());
