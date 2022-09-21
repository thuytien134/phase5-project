import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ProductCard({ product, isLogin, user }) {
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate()

  function handleBagClick() {
    if (isLogin === false)
      setShowAlert(true)
    else
      fetch("/product-in-carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: user.id,
          product_id: product.id
        })
      }).then(r => r.json())
  }

  function handleReviewClick(e){
    if (isLogin=== false)
    setShowAlert(true)
    else
    navigate("/product-reviews",{state:{product}})
    // console.log(product)
  }
  return (
    <div >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image_url} width={250} height={250} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Card.Body style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="info" onClick={handleReviewClick} >Reviews</Button>
            <Button variant="info" onClick={handleBagClick} >Add to bag</Button>
          </Card.Body>
          {showAlert ? <Alert variant="warning" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>Please log in !!!
            <Button variant="warning" onClick={() => setShowAlert(false)}>x</Button>
          </Alert> : ""}
        </Card.Body>
      </Card>
    </div>
  )
}
