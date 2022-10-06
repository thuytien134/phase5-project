import React from 'react'
import { Rating, Typography } from '@mui/material'
import { Alert, Button } from 'react-bootstrap'
import { useState,useContext } from 'react'
import { UserContext } from './context/User'


export default function ReviewForm({ curentProductId, onAddReview }) {
    const [showAlert, setShowAlert] = useState(false)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])
    const {user} = useContext(UserContext)


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
                    product_id: curentProductId,
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
            <form onSubmit={handleSubmit} style={{padding:"20px",backgroundColor:"ghostwhite",width:"90%"}} >
                <label> Your reviews are important....</label><br/>
                <input type="text" placeholder='your review here...' value={comment} onChange={(e) => setComment(e.target.value)} style={{height:"100px",width:"100%"}}/><br/>
                <Typography component="legend">How would you rate for this product?</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(e, newRating) => setRating(newRating)}
                /><br/>
                <button>post</button>
            </form>
            {showAlert ? <Alert variant="warning" style={{ display: "flex", alignItems: "center", justifyContent: "space-around",width:"70%" }}>Please log in !!!
                <Button variant="warning" onClick={() => setShowAlert(false)}>x</Button>
            </Alert> : ""}
            {errors.length === 0 ? "" : <Alert variant='warning' style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>{errors}
                <Button variant="warning" onClick={() => setErrors([])}>x</Button>
            </Alert>}
        </div>
    )
}
