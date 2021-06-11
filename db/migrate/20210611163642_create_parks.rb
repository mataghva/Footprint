class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false, index: true
      t.text :description
      t.integer :acreage
      t.float :rating, null: false
      t.timestamps
    end
  end
end
