import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Stack,Rating } from '@mui/material'
import { useContext } from 'react'
import { ReviewsContext } from './context/Reviews'


export default function MyReviewsCard({review}) {
  const {handleDeleteReview} = useContext(ReviewsContext)
  function handleDelete() {

    fetch(`/reviews/${review.id}`, {
        method: "DELETE",
    }).then((r) => {
        if (r.ok) {
            handleDeleteReview(review.id);
        }
    });
}
   
  return (
    <div style={{padding:"0.5rem",width:"50rem",paddingLeft:"20%"}}>
       <Card >
                <Card.Header as="h5">{review.product.name}</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={review.product.image_url} style={{width:"200px",height:"200px"}} />

                        <Stack spacing={1}>
                            <Rating name="read-only" readOnly value={review.rating} />
                        </Stack>
                        <Card.Text>
                            Comment: {review.comment}<br/>
                            Created at: {Date(review.created_at).slice(0,16)}
                        </Card.Text>
                        <div>
                            <Button style={{ backgroundColor: "moccasin" }} onClick={handleDelete} >🗑</Button>
                        </div>
                </Card.Body>
            </Card>
    </div>
  )
}
