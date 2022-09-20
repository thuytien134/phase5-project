
import React from 'react'
import { Button } from 'react-bootstrap';

export default function Logout({onLogout,setIsLogin}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            onLogout(null);
            setIsLogin(false)
          }
        });
      }
  return (
    <div>
      <Button variant="info" onClick={handleLogoutClick} style={{position:"absolute",top:"0.5rem"}}>Log out</Button>
    </div>
  )
}
