json.array! @locations do |location|
  json.partial! 'api/locations/location', locals: { location: location }

  json.reviews do
    json.array! location.reviews.includes(:user) do |review|
      json.partial! 'api/reviews/review', locals: { review: review }
    end
  end
end
