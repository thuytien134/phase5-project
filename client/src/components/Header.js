import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from './context/User';
import { IsLoginContext } from './context/IsLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Header() {
    const { user } = useContext(UserContext)
    const { isLogin } = useContext(IsLoginContext)
    return (
        <div
        //  style={{display: "flex", borderBottom: "3px solid", justifyContent:"space-between", alignItems:"center"}}
        >
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDb8YyQwFznhZ5QfMw71jUVWmywoPFAzCZohM-4_TLxFhKWq4C" alt="logo"
                    style={{ height: "120px", width: "120px" }} />
                <h1>Thuy Shop</h1>
            </div>
            <nav style={{border:"solid",background:"antiquewhite",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
                <NavLink to="/">Home ||</NavLink>
                <NavLink to="/login"> {isLogin ? `Hi ${user.username}` : 'Log in'}</NavLink>

            </nav>
        </div>
    )
}
