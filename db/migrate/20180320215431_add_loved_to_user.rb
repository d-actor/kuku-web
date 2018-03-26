class AddLovedToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :loved, :text
  end
end
