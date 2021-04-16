json.extract! user, :id, :email, :first_name, :last_name, :balance
json.watchlists user.watchlists do |watchlist|
  json.id watchlist.id
  json.name watchlist.name
  json.user_id watchlist.user_id
  json.watchlist_items watchlist.watchlist_items do |items|
    json.id items.id
    json.watchlist_id items.watchlist_id
    json.stock_id items.stock_id
  end
end