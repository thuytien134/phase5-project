import React from 'react'
import { useState, useEffect } from 'react';

export default function ProducList() {
    const [products,setProducts]=useState([])
    useEffect(() => {
        fetch("/products")
          .then((r) => r.json())
          .then((data) => setProducts(data));
      }, []);
  return (
    <div>
      <h2>hello </h2>
    </div>
  )
}
