Rails.application.routes.draw do
  resources :product_in_carts
  resources :users
  resources :categories
  resources :products
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/products', to: 'products#index'
end
