import React, { useContext,useRef,useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from './context/User';
import { IsLoginContext } from './context/IsLogin';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const { user } = useContext(UserContext)
    const { isLogin } = useContext(IsLoginContext)
    let shopName = useRef(null)
    let logo =useRef(null)
    useEffect(()=>{
        gsap.from(shopName,{
            y:-100,
            duration:1,
        })
    },[])
    useEffect(()=>{
        gsap.from(logo,{
            x:-200,
            duration:2,
        })
    },[])
    

    return (
        <div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <img ref={el=>(logo=el)} src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDb8YyQwFznhZ5QfMw71jUVWmywoPFAzCZohM-4_TLxFhKWq4C" alt="logo"
                    style={{ height: "120px", width: "120px" }} />
                <h1 style={{fontFamily:"fantasy",color:"lightcoral"}}  ref={el=>(shopName=el)}>Thuy Shop</h1>
            </div>
            <nav style={{border:"solid",background:"antiquewhite",display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:"0.5rem",paddingRight:"1rem"}}>
                <NavLink to="/" style={{paddingRight:"1.5rem"}}> 
                <FontAwesomeIcon icon={faHomeUser} className="hover:text-green-500"></FontAwesomeIcon>
                </NavLink>
                <NavLink to="/login" style={{paddingRight:"1.5rem"}}> {isLogin ? `Hi ${user.username}` : 'Log in'}</NavLink>
                <NavLink to="/contact-us" >Contact us</NavLink>
            </nav>
        </div>
    )
}
