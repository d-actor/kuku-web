class Api::ShowProductsController < ApplicationController
  before_action :authenticate_user!, only: [:my_products, :update, :delete]
  before_action :set_product, only: [:update, :delete]

  def update
    @product.update(show_product: !@product.show_product?)
    current_user.save
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

end
