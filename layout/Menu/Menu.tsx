import styles from "./Menu.module.css"
import classnames from 'classnames'
import { useAppContext } from "../../context/app.context"
import { FirstLevelMenuItem, MenuItem, Page } from "../../interfaces/menu.interface"
import CoursesIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/products.svg"
import { TopLevelCategory } from "@/interfaces/page.interface"

const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: 'courses',
        name: 'Courses',
        icon: <CoursesIcon/>,
        id: TopLevelCategory.Courses
    },
    {
        route: 'servises',
        name: 'Servises',
        icon: <ServicesIcon/>,
        id: TopLevelCategory.Services
    },
    {
        route: 'books',
        name: 'Books',
        icon: <BooksIcon/>,
        id: TopLevelCategory.Books
    },
    {
        route: 'products',
        name: 'Products',
        icon: <ProductsIcon/>,
        id: TopLevelCategory.Products
    }

]


export const Menu = () : JSX.Element =>{
    
    const {menu, setMenu, firstCategory} = useAppContext();
    
    const buildFirstLevel = ()=>{


        return <div>
            {firstLevelMenu.map(menu => {
                return <div key={menu.route}>
                    <a href={`/${menu.route}`}>
                        <div className={classnames(
                            styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id == firstCategory
                            }
                        )}>
                            {menu.icon}
                            <span>{menu.name}</span>
                        </div>
                        
                    </a>
                    {menu.id == firstCategory && buildSecondLevel(menu)}
                </div>
            })}
        </div>
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem)=>{
        return <div className={styles.secondBlock}>
            {menu.map(m=>{
            return <div key={m._id.secondCategory}>
                <div className={styles.secondLevel}>
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
            return <a 
                key={page._id} 
                href={`/${route}/${page.alias}`}
                className={classnames(styles.thirdLevel, {
                    [styles.thirdLevelActive]: true
                })}
                >
                    {page.category}
            </a>
        })
    }
    
    return <div className={styles.menu}>
       {buildFirstLevel()}
    </div>
}