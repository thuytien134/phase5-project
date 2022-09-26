import React,{useContext} from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from './context/User';
import { IsLoginContext } from './context/IsLogin';

export default function Header() {
    const {user}= useContext(UserContext)
    const {isLogin}= useContext(IsLoginContext)
    return (
        <div style={{display: "flex", borderBottom: "3px solid", justifyContent:"space-between", alignItems:"center"}}>
            <h1>Thuy Shop</h1>
            <nav>
                <NavLink to="/">Home ||</NavLink>
                <NavLink to="/login"> {isLogin? `Hi ${user.username}`: 'Log in'}</NavLink>
                
            </nav>
        </div>
    )
}
