class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name, null: false, index: true
      t.text :description, null: false
      t.text :short_descr, null: false
      t.float :length, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :elevation_gain, null: false
      t.string :difficulty, null: false
      t.string :usage, null: false
      t.string :route_type, null: false
      t.string :features, null: false
      t.float :rating, null: false
      t.integer :park_id, null: false, index: true


      t.timestamps
    end
  end
end
