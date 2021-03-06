class Api::LocationVisitsController < ApplicationController
  def create
    @location_visit = LocationVisit.new(location_visit_params)

    if @location_visit.save
      @user = @location_visit.user
      # byebug
      # @location = @location_visit.location
      render "api/users/show"
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def destroy
    @location_visit = LocationVisit.find(params[:id])
    @location_visit.destroy
    @user = @location_visit.user
    render "api/users/show"
  end

  private
  def location_visit_params
    params.require(:location_visit).permit(:user_id, :location_id)
  end
end
