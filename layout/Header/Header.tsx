import { HeaderProps } from "./Header.props"
import styles from "./Header.module.css"
import classnames from 'classnames'
import Logo from "../logo.svg"
import MenuIcon from "./menu.svg"
import { Button } from "@/components"
import { Sidebar } from "../Sidebar/Sidebar"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export const Header = ({className, ...props }: HeaderProps) 
: JSX.Element =>{

    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(()=>{
        setIsMenuOpen(false);
    }, [router])

    const openMenu = ()=>setIsMenuOpen(true)
    const closeMenu = ()=>setIsMenuOpen(false)

    return <header {...props} className={classnames(className, styles.header)}>
        <Logo className={styles.logo}/>
        <Button appearance='ghost'  className={styles.menuBtn} onClick={openMenu}><MenuIcon/></Button>
        {isMenuOpen && <div className={styles.mobileMenu}>
            <Sidebar/>
            <Button appearance='primary' className={styles.closeBtn} onClick={closeMenu}>&#9587;</Button>
        </div>}
    </header>
    
    
}