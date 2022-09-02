class Reservation < ApplicationRecord

    validates :date, :time, :party_size, :user_id, :restaurant_id, presence: true

    belongs_to :booker,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Restaurant

end