require 'rest-client'

ActiveRecord::Base.establish_connection
ActiveRecord::Base.connection.tables.each do |table|
  next if table == 'schema_migrations'

  # MySQL and PostgreSQL
  ActiveRecord::Base.connection.execute("TRUNCATE #{table}")
end

User.delete_all
Stock.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('stocks')
ActiveRecord::Base.connection.reset_pk_sequence!('watchlists')
ActiveRecord::Base.connection.reset_pk_sequence!('watchlist_items')

test_user = User.create(
  email: 'test@mail.com',
  first_name: 'Test',
  last_name: 'Tester',
  password: '123456'
)


stocks_get = RestClient.get "https://finnhub.io/api/v1/stock/symbol?exchange=US&securityType=Common%20Stock&token=#{Rails.application.credentials.finnhub[:api_key]}"

all_stocks = JSON.parse(stocks_get) 


all_stocks.each do |stocks|
  Stock.create(
    symbol: stocks["symbol"],
    name: stocks["description"]
  )
end