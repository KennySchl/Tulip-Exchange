class RemoveUniqueWatchlistItemsAgain < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlist_items, :stock_id
    add_index :watchlist_items, :stock_id
  end
end
