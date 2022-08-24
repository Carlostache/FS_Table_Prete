@restaurants.each do |restaurant|
    json.extract! restaurant, :id, :name, :dollars, :cuisine,
     :neighborhood, :phone_number
end