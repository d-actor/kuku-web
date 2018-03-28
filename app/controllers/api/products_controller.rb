class Api::ProductsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Product.all
  end

  def my_products
    render json: User.loved(current_user.loved)
  end

  def update
    current_user.loved << params[:id].to_i
    current_user.save
  end

end
