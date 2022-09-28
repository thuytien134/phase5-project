import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import EditReview from './EditReview';
import { useState, useContext } from 'react';
import { UserContext } from './context/User';

export default function ProductReviewCard({ review, onDeleteReview ,onUpdateReview}) {
    const [isEditing, setIsEditing] = useState(false)
    const {user} = useContext(UserContext)
    //     //    formatter = new Intl.DateTimeFormat("en-GB", {
    //         year: "numeric",
    //         month: "long",
    //         day: "2-digit"
    //       });
function handleUpdateReview(updatedReview){
setIsEditing(false)
onUpdateReview(updatedReview)
}
 console.log(review)

    function handleDelete() {

        fetch(`/reviews/${review.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteReview(review.id);
            }
        });
    }

    return (
        <div>

            <Card>
                <Card.Header as="h5">Reviewed by: {review.user.username} --------at:{review.created_at}</Card.Header>
                <Card.Body>
                    {isEditing ? <EditReview review={review} handleUpdateReview={handleUpdateReview}/> : <>
                        <Stack spacing={1}>
                            <Rating name="read-only" readOnly value={review.rating} />
                        </Stack>
                        <Card.Text>
                            {review.comment}
                        </Card.Text>
                    </>}
                    {(!user) || user.username !== review.user.username ? "" :
                        <div>
                            <Button style={{ backgroundColor: "moccasin", color: "black" }} onClick={() => setIsEditing(isEditing => !isEditing)}>✎</Button>
                            <Button style={{ backgroundColor: "moccasin" }} onClick={handleDelete}>🗑</Button>
                        </div>}

                </Card.Body>
            </Card>
        </div>
    )
}
