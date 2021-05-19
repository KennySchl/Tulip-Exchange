import { RECEIVE_CURRENT_WATCHLISTS } from "../actions/watchlists_actions";

// const _nullWatchlists = Object.freeze({
//   watchlists: [],
// });

const watchlistsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_WATCHLISTS:
      return action.watchlists;
    default:
      return state;
  }
};

export default watchlistsReducer;
