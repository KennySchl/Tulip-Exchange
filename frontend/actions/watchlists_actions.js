import * as WatchlistAPI from "../util/watchlists_api_util";

export const RECEIVE_CURRENT_WATCHLISTS = "RECEIVE_CURRENT_WATCHLISTS";
export const ADD_WATCHLIST_ITEM = "ADD_WATCHLIST_ITEM";
export const REMOVE_WATCHLIST_ITEM = "REMOVE_WATCHLIST_ITEM";

const receiveWatchlists = (watchlists) => ({
  type: RECEIVE_CURRENT_WATCHLISTS,
  watchlists,
});

const removeWatchlistItem = (listItem) => ({
  type: REMOVE_WATCHLIST_ITEM,
  listItem,
});

export const fetchWatchlists = (userId) => (dispatch) =>
  WatchlistAPI.fetchAllUserWatchlists(userId).then((watchlists) =>
    dispatch(receiveWatchlists(watchlists))
  );

export const deleteWatchlistItem =
  (userId, watchlistId, listItemId) => (dispatch) =>
    WatchlistAPI.deleteWatchlistItem(userId, watchlistId, listItemId).then(
      (watchlists) => dispatch(receiveWatchlists(watchlists))
    );

export const createWatchlistItem = (userId, watchlistId, data) => (dispatch) =>
  WatchlistAPI.createWatchlistItem(userId, watchlistId, data).then(
    (watchlists) => dispatch(receiveWatchlists(watchlists))
  );
