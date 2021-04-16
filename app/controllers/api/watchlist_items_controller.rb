class Api::WatchlistItemsController < ApplicationController

  ######################TESTING###################

  def index
    @watchlist_items = WatchlistItem.all
    render "api/watchlist_items/index"
  end

  ######################TESTING###################


  def create
    @watchlist_item = WatchlistItem.new(watchlist_item_params)

    if @watchlist_item.save
      render  "api/watchlists/show"
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end


  private

  def watchlist_item_params
    params.require(:watchlist_item).permit(:stock_id, :watchlist_id)
  end

end