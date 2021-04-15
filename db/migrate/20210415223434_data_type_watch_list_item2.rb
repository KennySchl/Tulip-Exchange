class DataTypeWatchListItem2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null :watchlist_items, :stock_id, false
    add_index :watchlist_items, :stock_id, unique: true
  end
end
