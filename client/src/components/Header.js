import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div style={{display: "flex", borderBottom: "3px solid", justifyContent:"space-between", alignItems:"center"}}>
            <h1>Thuy Shop</h1>
            <nav>
                <NavLink to="/">Home ||</NavLink>
                <NavLink to="/signin"> Sign in</NavLink>
            </nav>
        </div>
    )
}
