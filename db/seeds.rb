# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Category.create(name: 'Lipstick')
Category.create(name: 'Perfume')
Category.create(name: 'Skincare')
Product.create!(name:'Nars Semi Matte Lipstick in Jungle Red',price:26, image_url:'https://pyxis.nymag.com/v1/imgs/0d2/c9d/7e2638d562bb724d04da328e4dba4cfa04-nars-semi-matte-lipstick-in-jungle-red.rsquare.w600.jpg', category_id:1)
Product.create!(name:'Revlon Super Lustrous Lipstick',price:9.49, image_url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIOsYj4gsHxE7J7pgXckf9jTpqj3pEwat-nWgMczNXnT130siE', category_id:1)
Product.create!(name:'Mac Matte lipstick',price:27, image_url:'https://www.sephora.com/productimages/sku/s2200525-main-zoom.jpg?imwidth=315', category_id:1)
Product.create!(name:'Gucci Long Lasting Satin Lipstick',price:45, image_url:'https://www.sephora.com/productimages/sku/s2309631-main-zoom.jpg?imwidth=315', category_id:1)
Product.create!(name:'YSLROUGE PUR COUTURE PIGMENTED LIPSTICK',price:27, image_url:'https://www.yslbeautyus.com/on/demandware.static/-/Sites-ysl-master-catalog/default/dw5243376b/RCP-Custom-Cap/3614270878312.jpg', category_id:1)
Product.create!(name:'NYX Professional Makeup Shine Loud Vegan High Shine Long-lasting Liquid Lipstick - 0.22 fl oz',price:12, image_url:'https://target.scene7.com/is/image/Target/GUEST_6b61dec1-2540-44b4-8db1-cb1032e811c1', category_id:1)
Product.create!(name:'CHANEL COCO MADEMOISELLE Eau de Parfum',price:146, image_url:'https://www.sephora.com/productimages/sku/s513176-main-zoom.jpg', category_id:2)
Product.create!(name:'These Are Officially the 13 Best Victoria Secret Fragrances',price:45, image_url:'https://www.byrdie.com/thmb/k1zAUxx3FumjV8rQbq8rkRZcmm8=/900x600/filters:fill(auto,1)/BYRDIE-primary-best-victoria-secret-perfumes-4767667-75efa9f108f948b78eabdf307ce97aa3.jpg', category_id:2)
Product.create!(name:"Dior J'ADORE" ,price:148, image_url:'https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dwb7a68472/assets/Y0715201/Y0715201_F071524009_E01_ZHC.jpg?sw=870&sh=580&sm=fit&imwidth=870', category_id:2)
Product.create!(name:'Chanel LES EAUX DE CHANEL – EAU DE TOILETTE SPRAY',price:140, image_url:'https://www.chanel.com/fnbv3/image/full/chanel__com_type1/skus_full/paris---paris-les-eaux-de-chanel--eau-de-toilette-spray-125ml.3145891024401.jpg', category_id:2)
Product.create!(name:'Ariana Grande Ari Eau de Parfum Spray for Women, 3.4 Fl Oz',price:34, image_url:'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81Qu0Kq05NL._SX466_.jpg', category_id:2)
Product.create!(name:'Lancome Absolue Soft Cream & Advanced Gènifique ',price:128, image_url:'https://n.nordstrommedia.com/id/sr3/044296a4-1c2e-4956-8f11-108d00a8430e.jpeg?h=365&w=240&dpr=2', category_id:3)
Product.create!(name:'SK II Facial Treatment Essence 7.7 oz',price:235, image_url:'https://cdn11.bigcommerce.com/s-x3hur0xe4r/images/stencil/640w/products/217/967/FTE_1main__03316.1656598635.png?c=1', category_id:3)
Product.create!(name:'ESTÉE LAUDER 3-Pc. Nighttime Necessities Repair + Lift + Hydrate Set, 3.4 Fl Oz',price:133, image_url:'https://slimages.macysassets.com/is/image/MCY/products/7/optimized/22162147_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp', category_id:3)
Product.create!(name:'bliss Ex-glow-sion Brightening Moisturizer',price:24, image_url:'https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/15-ygt-690x480-min-resize.jpg', category_id:3)
