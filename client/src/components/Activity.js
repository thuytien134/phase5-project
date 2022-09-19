import React from 'react'
import Logout from './Logout'
import { Tabs, Tab } from '@mui/material'
import ProductInBag from './ProductInBag';
// import { useEffect,useState } from 'react';



export default function Activity({ onLogout, setIsLogin }) {
  const [value, setValue] = React.useState(0);
  // const [productInBags,setProductInBags] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleClickBag() {
    console.log('hello')
    // useEffect(() => {
    //   fetch("/products")
    //     .then((r) => r.json())
    //     .then((data) => setProducts(data));
    // }, []);
  }


  return (
    <div>
      <Tabs
        value={value} onChange={handleChange} aria-label="icon tabs example"
      >
        <Tab icon={"🛍️"} label="bag" onClick={handleClickBag} />
        <Tab icon={"reviews"} aria-label="reviews" />
      </Tabs>

      <ProductInBag />
        <Logout onLogout={onLogout} setIsLogin={setIsLogin} />

    </div>
  )
}
