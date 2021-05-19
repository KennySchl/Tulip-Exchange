import {
  ADD_WATCHLIST_ITEM,
  RECEIVE_CURRENT_WATCHLISTS,
  REMOVE_WATCHLIST_ITEM,
} from "../actions/watchlists_actions";

// const _nullWatchlists = Object.freeze({
//   watchlists: [],
// });

const watchlistsReducer = (state = [], action) => {
  let newState = state;
  // const newState = state;
  switch (action.type) {
    case RECEIVE_CURRENT_WATCHLISTS:
      return action.watchlists;
    case ADD_WATCHLIST_ITEM:
      return newState;
    case REMOVE_WATCHLIST_ITEM:
      return newState;

    // newState.forEach((watchlist) => {
    //     watchlist.watchlistItems.filter(
    //       (listItem) => listItem.id === action.listItem.id
    //     );
    //   });

    default:
      return state;
  }
};

export default watchlistsReducer;
