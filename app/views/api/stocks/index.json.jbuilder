json.array! @stocks, :id, :symbol, :name

# json.array! @stocks do |stock|
#   json.id stock.id
#   json.symbol stock.symbol
#   json.name stock.name
# end

# json.array! @stocks do |stock|
#   json.partial! "api/stocks/stock", stock: stock
# end