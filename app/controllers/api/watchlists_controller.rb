class Api::WatchlistsController < ApplicationController

######################TESTING###################

  def index
    @watchlists = Watchlist.all
    render json: @watchlists
  end

  def show
    @watchlist = Watchlist.find_by(id: params[:id])

    if @watchlist
      render "api/watchlists/show"
    else
      render json: { error: "Watchlist does not exist." }, status: 404
    end
  end

######################TESTING###################

  def create
    @watchlist = Watchlist.new(watchlist_params)

    if @watchlist.save
      render "api/watchlists/show"
    else
      render json: @watchlist.errors.full_messages, status: 422
    end
  end

  def update
    @watchlist = Watchlist.find_by(id: params[:id])

    if @watchlist && @watchlist.update_attributes(watchlist_params)
      render :show
    else
      render json: @watchlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist = Watchlist.find_by(id: params[:id])

    if @watchlist
      @watchlist.destroy
      render json: { status: 200 }, status: 200
    else
      render json: { error: "Watchlist does not exist." }, status: 404
    end
  end

  private

  def watchlist_params
    params.require(:watchlist).permit(:name, :user_id)

  end
end
