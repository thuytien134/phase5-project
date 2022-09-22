import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ProductReviewCard from './ProductReviewCard';
import ReviewForm from './ReviewForm';

export default function ProductReviews({ user }) {
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
    function handleDeleteReview(id) {
        const updatedReviews = reviews.filter(review => {
            return review.id !== id
        })
        setReviews(updatedReviews)
    }
    function handleAddReview(newReview) {
        setReviews([...reviews,newReview])
    }
    function handleUpdateReview(updatedReview){
        const updatedReviews = reviews.map( review => {
           return review.id === updatedReview.id ? updatedReview : review
        })
        setReviews(updatedReviews)
    }
    return (
        <div>

            {displayedReviews.map(review => {
                return <ProductReviewCard key={review.id} review={review} user={user} onDeleteReview={handleDeleteReview} onUpdateReview={handleUpdateReview}/>
            })}
            < ReviewForm curentProduct={curentProduct} user={user} onAddReview={handleAddReview}/>
        </div>
    )
}
