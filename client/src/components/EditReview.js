import React from 'react'
import { useState } from 'react'
import { Stack, Rating } from '@mui/material'


export default function EditReview({review,handleUpdateReview}) {
    const [newReview, setNewReview] = useState("")
    const [rating, setRating] = useState(0)
    function handleSubmit(e){
        e.preventDefault()
             fetch(`/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            rating: rating,
            comment: newReview
          }),
        })
          .then((r) => r.json())
          .then((data)=>handleUpdateReview(data));
     
    }
    return (
        <div>
            <form className="edit-review" onSubmit={handleSubmit}>
                <Stack spacing={1}>
                    <Rating name="read-only"  value={rating} onChange={(e,newRating)=>setRating(newRating)}/>
                </Stack>
                <input
                    type="text"
                    name="review"
                    autoComplete="off"
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
