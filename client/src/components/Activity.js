import React from 'react'
import Logout from './Logout'

export default function Activity({onLogout,setIsLogin}) {
  return (
    <div>
      <Logout onLogout={onLogout} setIsLogin={setIsLogin}/>
    </div>
  )
}
