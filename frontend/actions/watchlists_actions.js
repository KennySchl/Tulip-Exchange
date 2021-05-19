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
