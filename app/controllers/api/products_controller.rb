class Api::ProductsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Product.random_product(current_user.loved)
  end

  def my_products
    render json: User.loved(current_user.loved)
  end

  def update
    current_user.loved << params[:id].to_i
    current_user.save
  end

end
