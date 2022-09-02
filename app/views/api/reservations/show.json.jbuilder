json.partial! "reservation", reservation: @reservation
json.restaurant do
    json.extract! @reservation.restaurant, :name
end