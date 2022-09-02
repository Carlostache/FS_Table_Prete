@reservations.each do |reservation|
    json.set! reservation.id do
        json.partial! "reservation", reservation: reservation
        json.restaurant do
            json.extract! reservation.restaurant, :name
        end
    end
end
