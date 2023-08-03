import { SidebarProps } from "./Sidebar.props"
import styles from "./Sidebar.module.css"
import classnames from 'classnames'
import { Menu } from "../Menu/Menu"
import Logo from "../logo.svg"

export const Sidebar = ({className, ...props }: SidebarProps) 
: JSX.Element =>{
    return <div {...props} className={classnames(className, styles.sidebar)}>
        <Logo className={styles.logo}/>
        <div>Search...</div>
        <Menu/>
    </div>
}