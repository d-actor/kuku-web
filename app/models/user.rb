class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  serialize :loved_products, Array
  serialize :show_products, Array
  serialize :hated_items, Array
  serialize :purchased_items, Array

  def self.loved(ids)
    ids = ids.empty? ? [0] : ids
    Product.where("id IN (?)", ids)
  end

  def self.random_product(ids)
    ids = ids.empty? ? [0] : ids
    Product.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.hated(ids)
    ids = ids.empty? ? [0] : ids
    Product.where("id IN (?)", ids)
  end

  def self.purchased(ids)
    ids = ids.empty? ? [0] : ids
    Product.where("id IN (?)", ids)
  end
end
