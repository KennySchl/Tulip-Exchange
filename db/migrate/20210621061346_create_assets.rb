class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.integer "user_id", null: false
      t.integer "stock_id", null: false
      t.integer "quantity", null: false
      t.timestamps
    end
  end
end
