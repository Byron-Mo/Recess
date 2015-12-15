json.extract! @user, :username, :password

json.reviews do
  json.array! @user.reviews do |review|
    json.partial! 'api/reviews/review', locals: { review: review }
  end
end
