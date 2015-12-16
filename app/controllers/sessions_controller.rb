class SessionsController < ApplicationController
  def destroy
    logout!
    render json: ""
  end
end
