import React from 'react'
import { useState, useEffect } from 'react'
import ProductInBagCard from './ProductInBagCard';

export default function ProductInBag() {
    const [productInBags, setProductInBags] = useState([])
   
    useEffect(() => {
        fetch("/product-in-carts")
            .then((r) => r.json())
            .then((data) => setProductInBags(data));
    }, []);

    function handleDeleteProductInBag(id){
        const updatedProductInBagArr = productInBags.filter((p) => p.id !== id);
        setProductInBags(updatedProductInBagArr);
    }
    return (
        <div >
            <div
                style={{  display: "flex", flexWrap: "wrap", justifyContent: "space-around" , padding:"1rem" }}
            >
                {productInBags.map(productInBag => {
                    return <ProductInBagCard key={productInBag.id} product={productInBag.product} id={productInBag.id} onDeleteProducInBag={handleDeleteProductInBag}/>
                })}
            </div>
        </div>
    )
}
