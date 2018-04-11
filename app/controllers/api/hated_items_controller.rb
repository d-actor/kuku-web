class Api::HatedItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_product, only: [:update, :delete]

  def update
    current_user.hated_items << params[:id].to_i
    current_user.save
  end

  def my_hated_products
    render json: User.hated(current_user.hated_items)
  end


  def delete
    current_user.hated_items.delete_if{|i| i == @product.id}
    current_user.save
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

end
