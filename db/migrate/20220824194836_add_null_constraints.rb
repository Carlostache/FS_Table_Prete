class AddNullConstraints < ActiveRecord::Migration[5.2]
  def change

    change_column_null :restaurants, :dollars, false
    
    change_column_null :restaurants, :cuisine, false
  end
end
