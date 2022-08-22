@restaurants.each do |restaurant|
    json.extract! restaurant, :id, :name, :pricing, :cuisines,
     :neighborhood, :phone_number
end