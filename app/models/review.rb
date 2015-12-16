class Review < ActiveRecord::Base
  validates :rating, :body, :user_id, :location_id, presence: true
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }

  belongs_to :user
  belongs_to :location
end
