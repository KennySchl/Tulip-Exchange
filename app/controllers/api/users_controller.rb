class Api::UsersController < ApplicationController

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

#TEST TO SEE ALL USERS
  # def show
  #   @users = User.all
  #   render json: @users
  # end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

end
