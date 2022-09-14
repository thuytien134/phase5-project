import React from 'react'
import {  Nav, Col } from 'react-bootstrap';

export default function CategoryFilter({ selectedCategory, setSelectedCategory, categories }) {
    return (
        <div>
            {categories.map((category,index) => {
                return <Col sm={3} >
                    <Nav variant="pills" className='block'>
                        <Nav.Item key={index} active={category === selectedCategory}>
                            <Nav.Link eventKey="first"
                             onClick={() => setSelectedCategory(category)}>{category}</Nav.Link>  
                        </Nav.Item>
                    </Nav>
                </Col>
            })}
            {/* <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
            </Col> */}
        </div>
    )
}
