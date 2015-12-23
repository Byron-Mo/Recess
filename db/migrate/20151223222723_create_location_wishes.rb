class CreateLocationWishes < ActiveRecord::Migration
  def change
    create_table :location_wishes do |t|

      t.timestamps null: false
    end
  end
end
