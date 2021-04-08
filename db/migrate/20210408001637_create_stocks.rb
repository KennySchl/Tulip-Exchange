class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :stocks, :symbol, unique: true
    add_index :stocks, :name, unique: true
  end
end
