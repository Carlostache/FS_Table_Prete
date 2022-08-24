class Restaurant < ApplicationRecord

    validates :name, uniqueness: true

    has_one_attached :photo
    
end
