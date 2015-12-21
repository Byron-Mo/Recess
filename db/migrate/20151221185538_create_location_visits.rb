class CreateLocationVisits < ActiveRecord::Migration
  def change
    create_table :location_visits do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false
      t.timestamps null: false
    end
    add_index :location_visits, :user_id
    add_index :location_visits, :location_id
  end
end
