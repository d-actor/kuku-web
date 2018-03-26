class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.string :add_date
      t.integer :items_count
      t.float :total_price
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
