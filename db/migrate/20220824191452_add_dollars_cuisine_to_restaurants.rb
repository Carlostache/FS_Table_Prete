class AddDollarsCuisineToRestaurants < ActiveRecord::Migration[5.2]
  def change

    add_column :restaurants, :dollars, :string
    
    add_column :restaurants, :cuisine, :string
  end
end
