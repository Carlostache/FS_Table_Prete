class Restaurant < ApplicationRecord

    validates :name, uniqueness: true
    
end
