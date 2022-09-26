
import React,{useContext} from 'react'
import { Button } from 'react-bootstrap';
import { UserContext } from './context/User';
import { IsLoginContext } from './context/IsLogin';


export default function Logout() {
  const {setUser} = useContext(UserContext)
  const {setIsLogin} = useContext(IsLoginContext)

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
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
