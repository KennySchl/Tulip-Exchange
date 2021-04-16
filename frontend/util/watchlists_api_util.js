export const fetchUserWatchlists = (userId) =>
  $.ajax({
    url: `api/users/${userId}/watchlists`,
  });

export const createWatchlist = (userId) =>
  $.ajax({
    url: `api/users/${userId}/watchlists`,
    method: "POST",
  });
