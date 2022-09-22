import React from 'react'
import { Rating, Typography } from '@mui/material'
import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react'


export default function ReviewForm({ curentProduct, user, onAddReview }) {
    const [showAlert, setShowAlert] = useState(false)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])


    function handleSubmit(e) {
        e.preventDefault()
        setRating(0)
        setComment("")
      
        if (!user)
            setShowAlert(true)

        else

            fetch("/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: user.id,
                    product_id: curentProduct.id,
                    rating: rating,
                    comment: comment
                })
            }).then(r => {
                if (r.ok) {
                    r.json().then(data => onAddReview(data));
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label> Your reviews are important....</label>
                <input type="text" placeholder='your review here...' value={comment} onChange={(e) => setComment(e.target.value)} />
                <Typography component="legend">How would you rate for this product?</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(e, newRating) => setRating(newRating)}
                />
                <button>post</button>
            </form>
            {showAlert ? <Alert variant="warning" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>Please log in !!!
                <Button variant="warning" onClick={() => setShowAlert(false)}>x</Button>
            </Alert> : ""}
            {errors.length === 0 ? "" : <Alert variant='warning' style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>{errors}
                <Button variant="warning" onClick={() => setErrors([])}>x</Button>
            </Alert>}
        </div>
    )
}