json.extract! @user, :id, :username, :password

if @user.reviews
  json.reviews do
    json.array! @user.reviews do |review|
      json.partial! 'api/reviews/review', locals: { review: review }
    end
  end
end