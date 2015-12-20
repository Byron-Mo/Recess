class Api::PreferencesController < ApplicationController
  def create
    @preference = Preference.new(preference_params)
    @preference.user_id = current_user.id

    if @preference.save
      @user = @preference.user
      render "api/users/show"
    else
      render json: @preference.errors.full_messages, status: 422
    end
  end

  def show
    @preference = Preference.find(params[:id])
    render :show
  end

  def update
    @preference = Preference.find(params[:id])

    if @preference.update(preference_params)
      @user = @preference.user
      render "api/users/show"
    else
      render json: @preference.errors.full_messages, status: 422
    end
  end

  # private
  def preference_params
    params.require(:preference).permit(:activity, :region)
  end
end
