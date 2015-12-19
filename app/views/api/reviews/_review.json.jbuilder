json.extract! review, :location_id, :user_id, :rating, :body, :id

json.user do
  json.extract! review.user, :username
end

json.location do
  json.extract! review.location, :name
end
