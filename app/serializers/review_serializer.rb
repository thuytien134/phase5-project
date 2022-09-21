class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :product_id, :created_at, :updated_at
  belongs_to :user
end
