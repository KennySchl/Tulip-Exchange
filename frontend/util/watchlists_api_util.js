export const fetchUserWatchlists = (userId) =>
  $.ajax({
    url: `api/users/${userId}/watchlists`,
  });

export const createWatchlist = (userId) =>
  $.ajax({
    url: `api/users/${userId}/watchlists`,
    method: "POST",
  });

export const editWatchListName = (userId, watchlistId, data) =>
  $.ajax({
    url: `api/users/${userId}/watchlists/${watchlistId}`,
    method: "PATCH",
    data: { watchlist: data },
  });
