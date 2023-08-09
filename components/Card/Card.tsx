/* eslint-disable react/display-name */
import classnames from "classnames"
import {CardProps} from "./Card.props"
import styles from "./Card.module.css"
import { ForwardedRef, forwardRef } from "react"

export const Card = forwardRef( ({color='white', children, className, ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>)=>{
    return <div
        className={classnames(
            className,
            styles.card,
            {
                [styles.blue]: color == 'blue'
            }
        )}
        ref={ref}
        {...props}
        
        >
            {children}
    </div>
} )