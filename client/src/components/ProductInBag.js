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
    return (
        <div >
            <div
                style={{  display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}
            >
                {productInBags.map(productInBag => {
                    return <ProductInBagCard key={productInBag.id} product={productInBag.product} />
                })}
            </div>
        </div>
    )
}
