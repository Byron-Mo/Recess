class Location < ActiveRecord::Base
  validates :name, :region, :activity, :body, :image, presence: true
  validates :name, :image, uniqueness: true
  validates :activity, inclusion: { in: %w(Culture/History Beachfront, Adventure) }

  has_many :reviews
end
