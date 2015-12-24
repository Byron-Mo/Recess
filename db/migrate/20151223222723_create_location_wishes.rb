class CreateLocationWishes < ActiveRecord::Migration
  def change
    create_table :location_wishes do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false
      t.timestamps null: false
    end
    add_index :location_wishes, :user_id
    add_index :location_wishes, :location_id
  end
end
