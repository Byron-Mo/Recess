class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def destroy
  end
end
