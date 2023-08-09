/* eslint-disable react/display-name */
import { ReviewsProps } from "./Reviews.props";
import styles from "./Reviews.module.css"
import { Card } from "../Card/Card";
import UserIcon from "./user.svg"
import { Rating } from "../Rating/Rating";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ForwardedRef, forwardRef } from "react";

export const Reviews = forwardRef(({reviews, productId, ...props}: ReviewsProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <Card color='blue' className={styles.reviewsCard} ref={ref}>
        <div className={styles.reviews}>
            {reviews.map(review=>{
                const date = new Date(review.createdAt).toLocaleDateString('en-us', 
                    { 
                        year:"numeric", 
                        month:"short", 
                        day:"numeric"
                    }
                ) 
                return <div key={review._id}>
                    <div className={styles.titleRow}>  
                        <span className={styles.titleRowPart}>
                            <UserIcon/>
                            <span className={styles.userName}>{review.name}:</span>
                            <span className={styles.title}>{review.title}</span>
                        </span>
                        <span className={styles.titleRowPart}>
                            <span>{date}</span>
                            <span><Rating rating={review.rating}/></span>
                        </span>
                        
                    </div>
                    <p>{review.description}</p>
        
                </div>
            })}
        </div>
        <ReviewForm productId={productId}/>
    </Card>
})