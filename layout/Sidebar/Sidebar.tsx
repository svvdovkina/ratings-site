import { SidebarProps } from "./Sidebar.props"
import styles from "./Sidebar.module.css"
import classnames from 'classnames'

export const Sidebar = ({className, ...props }: SidebarProps) 
: JSX.Element =>{
    return <div {...props} className={classnames(className, styles.sidebar)}>
        Sidebar
    </div>
}