import { RECEIVE_STOCK, RECEIVE_STOCKS } from "../actions/stocks_actions";

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_STOCK:
      return { ...newState, ...action.stock };
    case RECEIVE_STOCKS:
      return action.stocks
    default:
      return state;
  }
};

export default stocksReducer;
