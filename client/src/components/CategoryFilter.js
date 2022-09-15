import React from 'react'
import {  Nav, Col } from 'react-bootstrap';

export default function CategoryFilter({ selectedCategory, setSelectedCategory, categories }) {
    return (
        <div>
            {categories.map((category,index) => {
                return <Col sm={3} key={index}  >
                    <Nav variant="pills" className='block'>
                        <Nav.Item  >
                            <Nav.Link eventKey="first"
                             onClick={() => setSelectedCategory(category)}>{category}</Nav.Link>  
                        </Nav.Item>
                    </Nav>
                </Col>
            })}
           
        </div>
    )
}
