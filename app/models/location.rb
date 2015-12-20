class Location < ActiveRecord::Base
  validates :name, :region, :activity, :body, :image, presence: true
  validates :name, :image, uniqueness: true
  validates :activity, inclusion: { in: %w(Culture/History Beachfront Adventure) }
  validates :region, inclusion: { in: ["North America", "South America", "Europe", "Africa", "Asia", "Oceania"] }

  has_many :reviews
end
