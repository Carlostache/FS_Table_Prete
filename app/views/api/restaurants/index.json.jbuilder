@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.extract! restaurant, :id, :name, :dollars, :cuisine,
     :neighborhood, :phone_number
    end
end