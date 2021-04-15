class RemoveUniqueWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlist_items, :watchlist_id
    add_index :watchlist_items, :watchlist_id
  end
end
