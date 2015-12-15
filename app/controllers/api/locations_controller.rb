class Api::LocationsController < ApplicationController
  def show
    @location = Location.find(params[:id])
    render: show
  end
end
