class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :product_id, :user_id
end
