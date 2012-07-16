class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :province
      t.string :country
      t.string :postalcode
      t.string :description
      t.string :webpage
      t.string :twitter_profile
      t.string :facebook_profile
      t.string :business_hours
      t.float :latidude
      t.float :longitude
      t.timestamp :created_at
      t.timestamp :updated_at     
    end
  end
end
