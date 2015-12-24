json.extract! location_wish, :location_id, :user_id, :id

json.location do
  json.extract! location_wish.location, :lat, :lng, :name
end
