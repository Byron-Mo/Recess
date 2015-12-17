class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
    render :index
  end

  def show
    @location = Location.find(params[:id])

    if @location
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end
end
