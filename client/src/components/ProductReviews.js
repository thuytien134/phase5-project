import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ReviewsContext } from './context/Reviews';
import ProductReviewCard from './ProductReviewCard';
import ReviewForm from './ReviewForm';
import { ProductsContext } from './context/Products';



export default function ProductReviews() {

    const { reviews, setReviews } = useContext(ReviewsContext)
    const { products } = useContext(ProductsContext)

    let { id } = useParams()

    const displayedReviews = reviews.filter(review => {
        return review.product.id === Number(id)
    })
    const curentProduct = products.filter(product => {
        return product.id === Number(id)
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
        <div style={{ paddingTop: "1rem",display:"flex",alignItems:"flex-start",justifyContent:"space-evenly",flexDirection:"row-reverse" }}>
            <div>
                {curentProduct.map(product => {
                    return <img key={product.id} src={product.image_url} style={{ height: "250px", width: "250px",border:"solid" }} variant="top" alt='imgage' />
                })}
            </div>
            <div>
                {displayedReviews.map(review => {
                    return <ProductReviewCard key={review.id} review={review} onUpdateReview={handleUpdateReview} />
                })}
                < ReviewForm curentProductId={id} onAddReview={handleAddReview} />
            </div>
        </div>
    )
}
