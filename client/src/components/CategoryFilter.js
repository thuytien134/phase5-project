import React from 'react'
import { Tab, Nav, Col } from 'react-bootstrap';

export default function CategoryFilter({ selectedCategory, setSelectedCategory, categories }) {
    return (
        <div>
            {categories.map((category,index) => {
                return <Col sm={3} key={index}>
                    <Nav variant="pills" className='flex-column'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">{category}</Nav.Link>
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
