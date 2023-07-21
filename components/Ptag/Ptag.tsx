import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css"
import classNames from "classnames"


export const Ptag = ({size = 'm', children, className, ...props}: PtagProps) : JSX.Element => {
    
    const pStyles = classNames(
        className,
        styles.p,
        {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l'
        }
    );

    return <p className={pStyles} {...props}>
            {children}
        </p>
}