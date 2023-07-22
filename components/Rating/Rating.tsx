import { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.proprs";
import StarIcon from "./star.svg"
import styles from "./Rating.module.css"
import classnames from "classnames"

export const Rating = (
    {
        isEditable = false, 
        rating, 
        setRating, 
        className, ...props
    } : RatingProps) : JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));


    const changeDisplay = (tempRating: number) => {
        if (!isEditable) return
        constructRating(tempRating)
    }

    const changeRating = (newRating: number) => {
        if (isEditable && setRating) setRating(newRating);
    }

    const handleEnterPress = (e: KeyboardEvent<SVGElement>, newRating: number) => {
        if (e.key === 'Enter' && isEditable && setRating) {
            setRating(newRating)
        };
    }

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map(
            (r: JSX.Element, i: number)=>{
                return <StarIcon key={i} className={classnames(
                    styles.star,
                    {
                        [styles.filled] : i < currentRating,
                        [styles.editable] : isEditable
                    })
                }
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGElement>)=>handleEnterPress(e, i + 1)}
                />

        })
        setRatingArray(updatedArray)
    }

    useEffect(
        ()=>constructRating(rating)
    , [rating])

    return <div {...props}>
       {ratingArray.map((r, i) => 
       <span key={i}
        onMouseEnter={()=>changeDisplay(i+1)}
        onMouseLeave={()=>changeDisplay(rating)}
        onClick={()=>changeRating(i + 1)}
       >
        {r}
       </span>)}
    </div>
}