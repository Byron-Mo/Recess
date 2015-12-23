json.extract! location_visit, :location_id, :user_id, :id

json.location do
  json.extract! location_visit.location, :lat, :lng, :name
end
