class Api::StocksController < ApplicationController

######################TESTING###################

  def index 
    @stocks = Stock.all
    render "api/stocks/index"
  end

######################TESTING###################
  
  def show
    @stock = Stock.find_by(id: params[:id])

    if @stock
      render "api/stocks/show"
    else
      render json: @stock.errors.full_messages, status: 404
    end
  end

end
