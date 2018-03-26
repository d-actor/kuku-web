class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :alt1
      t.string :body
      t.string :gender
      t.string :handle
      t.string :image_src
      t.string :title
      t.string :variety
      t.string :variant_price
      t.string :float
      t.string :vendor
      t.string :address
      t.string :link
      t.string :logo
      
      t.timestamps
    end
  end
end
