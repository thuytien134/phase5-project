import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ProductReviewCard from './ProductReviewCard';

export default function ProductReviews({user}) {
    const [reviews, setReviews] = useState([])
    const location = useLocation();
    const curentProduct = location.state.product
    useEffect(() => {
        fetch("/reviews")
            .then((r) => r.json())
            .then((data) => setReviews(data));
    }, []);
    const displayedReviews = reviews.filter(review => {
        return review.product_id === curentProduct.id
    })
    // debugger
    function handleDeleteReview(id){
       const updatedReviews= reviews.filter(review=>{
        return review.id !== id
       })
       setReviews(updatedReviews)
    }
    return (
        <div>
            <div>
                <h2>create your review </h2>
            </div>
            {displayedReviews.map(review => {
                return <ProductReviewCard key={review.id} review={review}  user={user} onDeleteReview={handleDeleteReview}/>
            })}
        </div>
    )
}
