import React from 'react'

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
      <button onClick={handleLogoutClick}>Log out</button>
    </div>
  )
}
