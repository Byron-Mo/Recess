class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = current_user.reviews.new(review_params)

    unless @review.save
      render json: @review.errors.full_messages, status 422
    end
  end

  def update
    @review = Review.find(params[:id])

    unless @review.update(review_params)
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body, :location_id)
  end
end
