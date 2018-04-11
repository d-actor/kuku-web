class AddHatedItemsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :hated_items, :string
  end
end
