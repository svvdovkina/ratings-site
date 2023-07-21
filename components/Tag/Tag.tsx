import { TagProps } from "./Tag.props"
import styles from "./Tag.module.css"
import classNames from "classnames"

export const Tag = ({size = 'm', color = 'ghost', href, children, className, ...props} : TagProps) : JSX.Element => {

    const tagStyles = classNames(
        className,
        styles.tag,
        styles[size],
        styles[color]
    )

    return <div className={tagStyles} {...props}>
        { href ? 
            <a href={href}>{children}</a>
            : children
        }
    </div>
}