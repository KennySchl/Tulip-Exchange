class Api::StocksController < ApplicationController

  def index 
    @stocks = Stock.all
    render "api/stocks/index"
  end

  def show
    @stock = Stock.find_by(symbol: params[:symbol])

    if @stock
      render "api/stocks/show"
    else
      render json: @stock.errors.full_messages, status: 404
    end
  end

end
