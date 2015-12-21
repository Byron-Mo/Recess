class LocationVisit < ActiveRecord::Base
  validates :user, :location, presence: true

  belongs_to :user
  belongs_to :location
end
