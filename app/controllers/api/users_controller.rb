class Api::UsersController < ApplicationController

######################TESTING###################

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render "api/users/show"
    else
      render json: { error: "User does not exist." }, status: 404
    end
  end

######################TESTING###################

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      #jbuilder json response
      render "api/users/show"
    else
      # 422 Unprocessable Entity
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

end