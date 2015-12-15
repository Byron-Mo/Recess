class Review < ActiveRecord::Base
  validates :rating, :body, :reviewer_id, :location_id, presence: true

  belongs_to :reviewer
  belongs_to :location
end
