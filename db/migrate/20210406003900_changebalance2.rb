class Changebalance2 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :balance, :decimal, :default => 0.00, null: false, precision: 15, scale: 2
  end
end
