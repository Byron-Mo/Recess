class CreatePreferences < ActiveRecord::Migration
  def change
    create_table :preferences do |t|
      t.string :region, null: false
      t.string :activity, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :preferences, :user_id
  end
end
