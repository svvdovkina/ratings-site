import styles from "./Button.module.css"
import { ButtonProps } from "./Button.props"
import classNames from "classnames"
import Arrow from "../../public/arrow.svg"

export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps) => {
    const btnClass = classNames(
        className,
        styles.button,
        {
            [styles.primary] : appearance === 'primary',
            [styles.ghost] : appearance === 'ghost'
        }
    );

    const arrowClass = classNames(
        styles.arrow,
        {
            [styles.right] : arrow === 'right',
            [styles.down] : arrow === 'down',
        }
    );

    return <button className={btnClass} {...props}>
            {children}
            {arrow !== 'none' && 
                <Arrow className={arrowClass}/>
            }
        </button>
}