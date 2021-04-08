import { RECEIVE_STOCK } from "../actions/stocks_actions";

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_STOCK:
      return { ...newState, ...action.stock };
    default:
      return state;
  }
};

export default stocksReducer;
