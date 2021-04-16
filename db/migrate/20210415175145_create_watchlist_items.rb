class CreateWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_items do |t|
      t.integer :stock_id, null: false
      t.integer :watchlist_id, null: false
      t.timestamps
    end
    add_index :watchlist_items, :stock_id
    add_index :watchlist_items, :watchlist_id
  end
end
