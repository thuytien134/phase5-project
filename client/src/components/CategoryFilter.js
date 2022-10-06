import React from 'react'
import {  Nav } from 'react-bootstrap';

export default function CategoryFilter({  setSelectedCategory, categories }) {
    return (
        <div style={{backgroundColor:"lightblue",border:"solid",height:"10rem"}}>
            {categories.map((category,index) => {
                return <ul  key={index}  style={{paddingLeft:"0.5rem"}}>
                    <Nav variant="pills" className='block'>
                        <li  >
                            <Nav.Link
                             onClick={() => setSelectedCategory(category)}>{category}</Nav.Link>  
                        </li>
                    </Nav>
                </ul>
            })}
           
        </div>
    )
}
