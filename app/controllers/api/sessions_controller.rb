class Api::SessionsController < ApplicationController
    def create

        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
            )

        if @user.nil?
          render json: ['Incorrect login, try again'], status: 401
        else 
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        @user = current_user

        if current_user.nil?
            render json: ["No user logged in"], status: 404
        else
            logout
            render json: {}
        end
    end

end