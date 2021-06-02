class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false, index: true, unique: true
      t.integer :profile_pic_id
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true, unique: true

      t.timestamps
    end
  end
end
