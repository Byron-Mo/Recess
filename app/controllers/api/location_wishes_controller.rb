class Api::LocationWishesController < ApplicationController
  def create
    @location_wish = LocationWish.new(location_wish_params)

    if @location_wish.save
      @user = @location_wish.user
      render "api/users/show"
    else
      render json: @location_wish.errors.full_messages, status: 422
    end
  end

  def destroy
    @location_wish = LocationWish.find(params[:id])
    @location_wish.destroy
    @user = @location_wish.user
    render "api/users/show"
  end

  private
  def location_wish_params
    params.require(:location_wish).permit(:user_id, :location_id)
  end
end
