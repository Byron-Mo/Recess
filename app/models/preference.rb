class Preference < ActiveRecord::Base
  validates :region, :activity, :user, presence: true
  validates :activity, inclusion: { in: %w(Culture/History Adventure Beachfront) }
  validates :region, inclusion: { in: ["North America", "South America", "Europe", "Africa", "Asia", "Oceania"] }

  belongs_to :user
end
