class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(email, password)
        if @user
            longin(@user)
        else
            flash.now[:errors] = ["Invalid email or password"]
        end
    end

    def destroy
        log_out
    end
end
