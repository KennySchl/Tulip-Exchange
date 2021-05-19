import * as WatchlistAPI from "../util/watchlists_api_util";

export const RECEIVE_CURRENT_WATCHLISTS = "RECEIVE_CURRENT_WATCHLISTS";

const receiveWatchlists = (watchlists) => ({
  type: RECEIVE_CURRENT_WATCHLISTS,
  watchlists,
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
