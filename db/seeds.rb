require 'rest-client'
require 'byebug'

User.delete_all
Stock.delete_all

test_user = User.create(
  email: 'test@mail.com',
  first_name: 'Test',
  last_name: 'Tester',
  password: '123456'
)


stocks_get = RestClient.get 'https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&securityType=Common%20Stock&token=c1nnrna37fkph7jrl7ag'
# stocks_get = RestClient.get 'https://api.tiingo.com/tiingo/daily/AAPL/prices?startDate=04-13-2021&endDate=04-13-2021&token=bfcbb75eede09a5bde2137fca73bb4973adde2ad'

# puts stocks_get

all_stocks = JSON.parse(stocks_get) 


all_stocks.each do |stocks|
  Stock.create(
    symbol: stocks["symbol"],
    name: stocks["description"]
  )
end