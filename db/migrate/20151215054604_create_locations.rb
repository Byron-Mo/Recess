class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.string :region, null: false
      t.string :activity, null: false
      t.text :body, null: false
      t.string :image, null: false
      t.timestamps null: false
    end
  end
end
