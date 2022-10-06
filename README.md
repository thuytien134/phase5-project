
# Welcome to my Cosmetic Shop Project
## Introduction: 
This  web application enables users to create an account, log in & log out, view the products in my shop, add and remove items in your bag, and create/edit/delete reviews for each product.
### To get set up, run:
`bundle install`

`rails db:create db:migrate db:seed`

`npm install --prefix client`

You can  run the rails server with:
`rails s`

And you can run React in another terminal with:
`npm start --prefix client`

### Data structure
![ERD](./Database%20ER%20diagram%20(crow's%20foot).png)


* Ruby version: 
ruby-2.7.4
* System dependencies: 
i installed `bcrypt` Ruby gem in order to use Rails's `has_secure_password` to store and authenticate user login credentials securely. Passwords are hashed and salted.

* Deployment instructions:
I deployed the app Heroku. Visit it here: [Thuy shop](https://thuy-shop-app.herokuapp.com/) 


