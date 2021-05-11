export const fetchUserWatchlist = (userId, watchlistId) =>
  $.ajax({
    url: `api/users/${userId}/watchlists/${watchlistId}`,
  });

export const fetchAllUserWatchlists = (userId) =>
  $.ajax({
    url: `api/users/${userId}/watchlists`,
  });

export const createWatchlist = (userId, data) =>
  $.ajax({
    url: `api/users/${userId}/watchlists`,
    method: "POST",
    data: { watchlist: data },
  });

export const editWatchListName = (userId, watchlistId, data) =>
  $.ajax({
    url: `api/users/${userId}/watchlists/${watchlistId}`,
    method: "PATCH",
    data: { watchlist: data },
  });

export const deleteWatchlist = (userId, watchlistId) =>
  $.ajax({
    url: `api/users/${userId}/watchlists/${watchlistId}`,
    method: "DELETE",
  });

export const createWatchlistItem = (data) =>
  $.ajax({
    url: `api/watchlist_items/`,
    method: "POST",
    data: { watchlistItem: data },
  });
