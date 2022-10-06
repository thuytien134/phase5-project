import React from 'react'
import { useState, useContext } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { ProductsContext } from './context/Products';


export default function ProducList() {
  const { products } = useContext(ProductsContext)

  const [selectedCategory, setSelectedCategory] = useState("Lipstick");

  const categories = products.map(product => product.category.name).filter((el, i, ar) => ar.indexOf(el) === i)

  const displayedProducts = products.filter(
    product => product.category.name === selectedCategory
  )

  return (
    < >
      <div style={{ display: "flex", justifyContent: "flex-start", padding: "1rem", paddingTop: "1rem", paddingLeft: "0.1rem" }}>
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} />
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-around" }}>
          {displayedProducts.map(product => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </>
  )
}
