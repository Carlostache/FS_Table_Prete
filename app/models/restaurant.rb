class Restaurant < ApplicationRecord

    validates :name, uniqueness: true

    has_many_attached :photos
    
    has_many :reservations

end
