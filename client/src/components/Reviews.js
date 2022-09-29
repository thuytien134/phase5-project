import React from 'react'

import MyReviewsCard from './MyReviewsCard'
import { useContext } from 'react'
import { UserContext } from './context/User'
import { ReviewsContext } from './context/Reviews'

export default function Reviews() {
const {user} = useContext(UserContext)
const {reviews} = useContext(ReviewsContext)
const myReviews= reviews.filter(review => review.user.id === user.id)

  return (
    <div>
   {myReviews.map(review => {
    return <MyReviewsCard key={review.id} review={review}/>
   })}
    </div>
  )
}
