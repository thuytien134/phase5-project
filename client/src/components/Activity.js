import React from 'react'
import Logout from './Logout'
import { Tabs, Tab } from '@mui/material'

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ReviewsIcon from '@mui/icons-material/Reviews';

export default function Activity({ onLogout, setIsLogin }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div>
      <Tabs
        value={value} onChange={handleChange} aria-label="icon tabs example"
        >
        <Tab icon={"🛍️"} label="bag" />
        <Tab icon={"reviews"} aria-label="reviews" />
      </Tabs>
      <Logout onLogout={onLogout} setIsLogin={setIsLogin}/>
    </div>
  )
}
