import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation,useParams } from 'react-router-dom';
import ProductReviewCard from './ProductReviewCard';
import ReviewForm from './ReviewForm';


export default function ProductReviews() {
  
    const [reviews, setReviews] = useState([])
    // const location = useLocation();
    // const curentProduct = location.state.product
    let {id} =useParams()
// console.log(id)
    useEffect(() => {
        fetch("/reviews")
            .then((r) => r.json())
            .then((data) => setReviews(data));
    }, []);
    const displayedReviews = reviews.filter(review => {
        return review.product_id === Number(id)
    })

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
                return <ProductReviewCard key={review.id} review={review}  onDeleteReview={handleDeleteReview} onUpdateReview={handleUpdateReview}/>
            })}
            < ReviewForm curentProductId={id} onAddReview={handleAddReview}/>
        </div>
    )
}
