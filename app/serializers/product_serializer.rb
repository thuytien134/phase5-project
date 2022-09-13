class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image_url
  belongs_to :category
end
