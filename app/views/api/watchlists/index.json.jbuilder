# json.array! @watchlists, :id, :user_id, :name 
@watchlists.each do |watchlist|
  json.partial! "api/watchlists/watchlist/", watchlist: watchlist
end