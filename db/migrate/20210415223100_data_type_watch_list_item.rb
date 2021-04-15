class DataTypeWatchListItem < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlist_items, :stock_id
    add_column :watchlist_items, :stock_id, :integer
  end
end
