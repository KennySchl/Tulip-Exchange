class Api::StocksController < ApplicationController

  def show
    @stock = Stock.find_by(symbol: params[:symbol])

    if @stock
      render "api/stocks/show"
    else
      render json: @stock.errors.full_messages, status: 404
    end
  end

end
