json.extract! @user, :id, :username, :password

if @user.reviews
  json.reviews do
    json.array! @user.reviews.includes(:location) do |review|
      json.partial! 'api/reviews/review', locals: { review: review }
    end
  end
end

if @user.preference
  json.preference do
    json.extract! @user.preference, :activity, :region, :id
  end
end

if @user.location_visits
  json.location_visits do
    json.array! @user.location_visits.includes(:location) do |location_visit|
      json.partial! 'api/location_visits/location_visit', locals: { location_visit: location_visit }
    end
  end
end
