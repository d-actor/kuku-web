Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :products, only: [:index, :update]
    resources :hated_items, only: [:index, :update]
    resources :show_products, only: [:update]
    resources :purchased_items, only: [:update]
    resources :users, only: [:update]
    get 'my_products', to: 'products#my_products'
    delete 'my_products/:id', to: 'products#delete'
    get 'my_hated_products', to: 'hated_items#my_hated_products'
    delete 'hated_items/:id', to: 'hated_items#delete'
    get 'purchased_items', to: 'purchased_items#purchased_items'
    get 'users', to: 'users#users'

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
