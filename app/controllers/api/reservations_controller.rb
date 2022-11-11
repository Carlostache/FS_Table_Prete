class Api::ReservationsController < ApplicationController

    def create 
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render "api/reservations/show"
        else
            render json: @reservation.errors.full_messages, status: 422
        end

    end

    def update
        
        @reservation = Reservation.find(params[:id])
        
        if @reservation.update(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end

    end


    def show
        @reservation = Reservation.find(params[:id])

        render :show
    end

    def index
        if user_id
            reservations = Reservation.where("user_id = ?", user_id)
            # reservation.includes(:restaurant)
        else
            reservations = {}
        end

        @reservations = reservations

    end
    

    def destroy
        @reservation = Reservation.find(params[:id])

        @reservation.destroy
    end

    private

    def reservation_params
        params.require(:reservation).permit(:date, :time, :party_size, :user_id, :restaurant_id)
    end

    def user_id
        params[:userId]
    end

end