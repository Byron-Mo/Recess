class Review < ActiveRecord::Base
  validates :rating, :body, :user_id, :location_id, presence: true

  belongs_to :user
  belongs_to :location
end
