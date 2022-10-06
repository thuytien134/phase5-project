import React from 'react'
import Logout from './Logout'
import { Tabs, Tab } from '@mui/material'
import ProductInBag from './ProductInBag';
import Reviews from './Reviews';
import { useState } from 'react';



export default function Activity({reviews}) {
  const [value, setValue] = React.useState(0);
  const [showBag, setShowBag] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div  style={{padding:"1rem"}}>
    
        <Tabs
          value={value} onChange={handleChange} aria-label="icon tabs example"
        >
          <Tab icon={"🛍️ bag"} aria-label="bag" onClick={() => setShowBag(true)} />
          <Tab icon={"reviews"} aria-label="reviews" onClick={() => setShowBag(false)} />
          <Logout  />
        </Tabs>

        {showBag ? <ProductInBag/> : <Reviews reviews={reviews}/>}
    </div>
  )
}
