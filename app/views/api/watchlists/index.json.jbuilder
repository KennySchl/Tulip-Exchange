# # json.array! @watchlists, :id, :user_id, :name 
json.array! @watchlists do |watchlist|
  json.id watchlist.id
  json.name watchlist.name
  json.user_id watchlist.user_id
  json.watchlist_items watchlist.watchlist_items do |watchlist_item|
    json.id watchlist_item.id
    json.stock_id watchlist_item.stock_id
    json.watchlist_id watchlist_item.watchlist_id
    end
  end