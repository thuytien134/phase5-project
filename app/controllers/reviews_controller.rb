class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        user = User.find_by(id: session[:user_id])
        review = user.reviews.create(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def update
        # user = User.find_by(id: session[:user_id])
        review = Review.find_by(id: params[:id])
        if review 
             review.update(review_params)
          if review.valid?
            render json: review, status: :ok
            else
                render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
            end
        else
          render json: { error: "Review not found" }, status: :not_found
        end
      end

    private

    def review_params
        params.permit(:user_id, :product_id, :rating, :comment)
    end
end