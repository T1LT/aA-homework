class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      # using JBuilder
      render 'api/users/show'
      # render json: { user: @current_user }
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:credential], params[:password])
    if @user
      login!(@user)
      # using JBuilder
      render 'api/users/show'
      # render json: { user: @user }
    else
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end
  end

  def destroy
    if @current_user
      logout
      render json: { message: 'success' }
    end
  end
end
