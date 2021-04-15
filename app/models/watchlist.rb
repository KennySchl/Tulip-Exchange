class Watchlist < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :watchlist_items,
    foreign_key: :watchlist_id,
    class_name: :WatchlistItem

end
