class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            flash.now[:errors] = @user.errors.full_messages
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            flash.now[:errors] = ["Something went wrong!"]
        end
    end

    private

    def user_params
        params.require(:user).permit(:firs_name, :last_name, :email, :password)
    end
end
