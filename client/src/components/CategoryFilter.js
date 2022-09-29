import React from 'react'
import {  Nav, Col } from 'react-bootstrap';

export default function CategoryFilter({ selectedCategory, setSelectedCategory, categories }) {
    return (
        <div style={{padding:"solid",backgroundColor:"lightblue"}}>
            {categories.map((category,index) => {
                return <ul  key={index}  >
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
