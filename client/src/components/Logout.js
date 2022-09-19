import { dark } from '@mui/material/styles/createPalette';
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
      <Button variant="info" onClick={handleLogoutClick}>Log out</Button>
    </div>
  )
}
