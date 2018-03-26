class Product < ApplicationRecord
  belongs_to :cart, optional: true
end
