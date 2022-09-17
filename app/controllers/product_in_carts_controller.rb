class ProductInCartsController < ApplicationController
    def index
        debugger
        product_in_carts= ProductInCart.all
        render json: product_in_carts
    end

    def create
        user = User.find_by(id: session[:user_id])
    end
end
