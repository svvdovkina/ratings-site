import styles from "./Menu.module.css"
import classnames from 'classnames'
import { useAppContext } from "../../context/app.context"
import { FirstLevelMenuItem, Page } from "../../interfaces/menu.interface"
import Link from "next/link"
import { useRouter } from "next/router"
import { firstLevelMenu } from "../../helpers/helpers"


export const Menu = () : JSX.Element =>{
    
    const {menu, setMenu, firstCategory} = useAppContext();
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        if (!setMenu) return 
        setMenu(menu.map(m=>{
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = true;
            }
            else m.isOpened = false;
            return m
        }))
    }

    const buildFirstLevel = ()=>{


        return <div>
            {firstLevelMenu.map(flmenu => {
                
                return <div key={flmenu.route}>
                    <Link href={`/${flmenu.route}`}>
                        <div className={classnames(
                            styles.firstLevel, {
                                [styles.firstLevelActive]: flmenu.id == firstCategory
                            }
                        )}>
                            {flmenu.icon}
                            <span>{flmenu.name}</span>
                        </div>
                    </Link>
                    {flmenu.id == firstCategory && buildSecondLevel(flmenu)}
                </div>
            })}
        </div>
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem)=>{
        return <div className={styles.secondBlock}>
            {menu.map(m=>{
                const curPage = router.asPath.split('/')[2]
                if (m.pages.map(p=> p.alias).includes(curPage)){
                    m.isOpened = true;
                }
                return <div key={m._id.secondCategory}>
                    <div className={styles.secondLevel} onClick = {()=>openSecondLevel(m._id.secondCategory)}>
                        {m._id.secondCategory}
                    </div>
                    <div className={classnames(
                        styles.secondLevelBlock,
                        {
                            [styles.secondLevelBlockOpen]: m.isOpened
                        }
                        )}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                    </div>
                </div>
            })}
        </div>
    }

    const buildThirdLevel = (pages: Page[], route: string)=>{
        return pages.map(page => {
            return <Link 
                key={page._id} 
                href={`/${route}/${page.alias}`}
                className={classnames(styles.thirdLevel, {
                    [styles.thirdLevelActive]:  router.asPath ==`/${route}/${page.alias}`
                })}
                >
                    {page.category}
            </Link>
        })
    }
    
    return <div className={styles.menu}>
       {buildFirstLevel()}
    </div>
}