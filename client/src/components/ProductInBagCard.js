import React from 'react'
import { Card,Button } from 'react-bootstrap'

export default function ProductInBagCard({ product }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image_url} width={250} height={250} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Card.Body style={{ display: "flex", justifyContent: "space-around"  }}>
                        <Button variant='info' >🗑</Button>
                    </Card.Body>
                </Card.Body>
            </Card>

        </div>
    )
}
