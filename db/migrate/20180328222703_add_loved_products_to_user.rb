class AddLovedProductsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :loved_products, :string
  end
end
