import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ProductCard({ product }) {
  return (
    <div >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image_url} width={250} height={250}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
           ${product.price}
          </Card.Text>
          <Button variant="primary" >Reviews</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
