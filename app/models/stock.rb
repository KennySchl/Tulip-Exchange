class Stock < ApplicationRecord
  validates :symbol, :name, presence: true, uniqueness: true

  has_many :watchlist_items,
    foreign_key: :stock_id,
    class_name: :WatchlistItem

  has_many :assets,
    foreign_key: :stock_id,
    class_name: :Asset
end
