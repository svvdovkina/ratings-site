import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { ReviewFromProps } from "./ReviewFrom.props";
import classNames from "classnames";
import styles from "./ReviewFrom.module.css"
import { Button } from "../Button/Button";
import React, { useState } from "react";

interface IReview {
    name: string;
    title: string;
    rating: number;
    text: string
}

export const ReviewForm = ({productId, className, ...props}: ReviewFromProps) : JSX.Element=>{
    
    const [success, setSucces] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    
    const emptyReview: IReview = {
        name: '',
        title: '',
        rating: 0,
        text: ''
    }
    const [review, setReview] = useState<IReview>(emptyReview);

    const setRating = (rating: number) => {
        setReview(prev=> ({
            ...prev,
            rating
        }))
    }

    const handleSubmit = (e: React.SyntheticEvent)=>{
        e.preventDefault();

        const {name, title, rating, text} = review;

        if (!name.length || !title.length || rating == 0 || !text.length) {
            setError(true);
            setTimeout(()=>{
                setError(false)
            }, 2000)

            return
        }
        setSucces(true);
        setTimeout(()=>{
            setSucces(false)
        }, 2000)
        setReview(emptyReview);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setReview(prev=> ({
            ...prev,
            [name]: value
        }))
    }
    
    return <form 
        onSubmit={handleSubmit} 
        className={classNames(className, styles.reviewForm)}
        {...props}
    >
        <div className={styles.titleRow}>
            <div className={styles.titleInputs}>
                <Input name="name" value={review.name} onChange={handleChange} placeholder="Name"/>
                <Input name="title" value={review.title} onChange={handleChange} placeholder="Title"/>
            </div>
            <div className={styles.rating}> 
                Rating: 
                <Rating isEditable={true} rating={review.rating} setRating={setRating}/> 
            </div>
        </div>
        <TextArea name="text" value={review.text} onChange={handleChange} placeholder="Review text" className={styles.textArea}/>
        <div className={styles.buttonRow}>
            <Button type="submit" appearance='primary'>Submit</Button>
            <span className={styles.moderateInfo}>* Before publication, the review will be pre-moderated and checked</span>
        </div>
        <div className={classNames(
            styles.success,
            {[styles.showMsg]: success})}>
            <div>Thank you! Your review has been submitted</div>
        </div>
        <div className={classNames(
            styles.error,
            {[styles.showMsg]: error})}>
            <div>Please fill out all the fields</div>
        </div>
    </form>
}