class Api::PurchasedItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_product, only: [:update]

  def update
    current_user.purchased_items << params[:id].to_i
    current_user.save
  end

  def purchased_items
    render json: User.purchased(current_user.purchased_items)
    current_user.save
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end
end
