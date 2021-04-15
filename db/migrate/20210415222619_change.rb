class Change < ActiveRecord::Migration[5.2]
  def change
    rename_column :watchlist_items, :stock_symbol, :stock_id
  end
end
