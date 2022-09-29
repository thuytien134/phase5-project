import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Stack,Rating } from '@mui/material'


export default function MyReviewsCard({review}) {
//   function handleDelete() {

//     fetch(`/reviews/${review.id}`, {
//         method: "DELETE",
//     }).then((r) => {
//         if (r.ok) {
//             onDeleteReview(review.id);
//         }
//     });
// }
   
  return (
    <div>
       <Card>
                <Card.Header as="h5">{review.product.name}</Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={review.product.image_url} style={{width:"200px",height:"200px"}} />

                        <Stack spacing={1}>
                            <Rating name="read-only" readOnly value={review.rating} />
                        </Stack>
                        <Card.Text>
                            {review.comment}<br/>
                            created at:{review.created_at}
                        </Card.Text>
                        <div>
                            <Button style={{ backgroundColor: "moccasin" }} >🗑</Button>
                        </div>

                </Card.Body>
            </Card>
    </div>
  )
}
