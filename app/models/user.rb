class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  serialize :loved, Array

  def self.loved(ids)
    ids = ids.empty? ? [0] : ids
    Product.where("id IN (?)", ids)
  end

  def self.random_product(ids)
    ids = ids.empty? ? [0] : ids
    Product.where("id NOT IN (?)", ids).order("RANDOM()")
  end
end
