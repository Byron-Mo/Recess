class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :body, null: false
      t.integer :reviewer_id, null: false
      t.integer :location_id, null: false
      t.timestamps null: false
    end
    add_index :reviews, :reviewer_id
    add_index :reviews, :location_id
  end
end
