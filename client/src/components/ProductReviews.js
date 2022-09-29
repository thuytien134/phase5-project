import React from 'react'
import {  useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ReviewsContext } from './context/Reviews';
import ProductReviewCard from './ProductReviewCard';
import ReviewForm from './ReviewForm';



export default function ProductReviews() {
   
    const {reviews, setReviews} = useContext(ReviewsContext)
    
    let { id } = useParams()
   
    const displayedReviews = reviews.filter(review => {
        return review.product.id === Number(id)
    })

 
    function handleAddReview(newReview) {
        setReviews([...reviews, newReview])
    }
    function handleUpdateReview(updatedReview) {
        const updatedReviews = reviews.map(review => {
            return review.id === updatedReview.id ? updatedReview : review
        })
        setReviews(updatedReviews)
    }
    return (
        <div>
            {/* <img variant="top" style={{ height: "200px", width: "200px" }} src={curentProductImg} /> */}
            <div>
                {displayedReviews.map(review => {
                    return <ProductReviewCard key={review.id} review={review}  onUpdateReview={handleUpdateReview} />
                })}
                < ReviewForm curentProductId={id} onAddReview={handleAddReview} />
            </div>
        </div>
    )
}
