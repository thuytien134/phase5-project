import React from 'react'
import { useState, useEffect,useContext} from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { ProductsContext } from './context/Products';


export default function ProducList() {
  const {products,setProducts} = useContext(ProductsContext)
  // const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Lipstick");
  // useEffect(() => {
  //   fetch("/products")
  //     .then((r) => r.json())
  //     .then((data) => setProducts(data));
  // }, []);
const categories = products.map(product => product.category.name).filter((el,i,ar)=>ar.indexOf(el)===i)
   
  const displayedProducts = products.filter(
    product =>  product.category.name === selectedCategory
  )

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories}/>
        <div style= {{display:"flex",flexWrap:"wrap", alignItems:"flex-end",justifyContent:"space-around"}}>
          {displayedProducts.map(product => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </div>
    </>
  )
}
