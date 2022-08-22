class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :pricing, null: false
      t.string :cuisines, null: false
      t.string :address, null: false
      t.string :phone_number, null: false
      t.string :neighborhood, null: false
      t.string :business_hours, null: false
      t.string :dining_style, null: false
      t.string :dress_code, null: false
      t.string :extra_info, null: false


      t.timestamps
    end

    add_index :restaurants, :name, unique: true

  end
end
