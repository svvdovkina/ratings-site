import { FooterProps } from "./Footer.props"
import styles from "./Footer.module.css"
import classnames from 'classnames'
import {format} from 'date-fns'

export const Footer = ({className, ...props }: FooterProps) 
: JSX.Element =>{
    return <footer {...props} className={classnames(className, styles.footer)}>
        <p>
         OwlTop © 2020 - {format(new Date(), "yyyy")} All rights reserved
        </p> 
        <a href="#">
            User agreement
        </a>
        <a href="#">
            Privacy policy
        </a>

    </footer>
}