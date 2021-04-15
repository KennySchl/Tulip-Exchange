json.extract! watchlist, :id, :name, :user_id
  json.watchlist_items watchlist.watchlist_items, :id, :stock_id, :watchlist_id