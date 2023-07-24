import { HeaderProps } from "./Header.props"
import styles from "./Header.module.css"
import classnames from 'classnames'

export const Header = ({className, ...props }: HeaderProps) 
: JSX.Element =>{
    return <div {...props} className={classnames(className, styles.header)}>
        Header
    </div>
}