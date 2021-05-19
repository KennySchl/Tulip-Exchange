class Api::WatchlistItemsController < ApplicationController

  ######################TESTING###################

  def index
    @watchlist_items = WatchlistItem.all
    render "api/watchlist_items/index"
  end

  ######################TESTING###################


  def create
    @watchlist_item = WatchlistItem.new(watchlist_item_params)
    @watchlists = Watchlist.where(user_id: params[:user_id])

    if @watchlist_item.save
      render  "api/watchlists/index"
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist_item = WatchlistItem.find_by(id: params[:id])
    @watchlists = Watchlist.where(user_id: params[:user_id])

    if @watchlist_item
      @watchlist_item.destroy
      render "api/watchlists/index"
    else
      render json: { error: "Watchlist does not exist." }, status: 404
    end
  end

  private

  def watchlist_item_params
    params.require(:watchlist_item).permit(:stock_id, :watchlist_id)
  end

end
