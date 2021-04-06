import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...newState, ...action.currentUser };
    default:
      return state;
  }
};
