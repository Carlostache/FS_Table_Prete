class Api::SessionsController < ApplicationController
    def create

        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
            )

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Incorrect login, try again'], status: 401
        end
    end

    def destroy
        @user = current_user

        if current_user.nil?
            render json: ["No user logged in"], status: 404
        else
            logout
            render "api/users/show"
        end
    end

end