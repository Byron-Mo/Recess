class AddCoordsToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :lat, :float, null: false
    add_column :locations, :lng, :float, null: false
  end
end
