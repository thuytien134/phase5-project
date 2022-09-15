import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header({isLogin,user}) {
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
