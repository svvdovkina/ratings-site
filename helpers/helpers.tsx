import CoursesIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/products.svg"
import { TopLevelCategory } from "../interfaces/page.interface"
import { FirstLevelMenuItem } from "../interfaces/menu.interface"


export const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const priceRu = (price: number): string => {
    return new Intl.NumberFormat(
        'ru-RU', 
        { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }
        ).format(price)
}

export const pluralize = (count: number, titles: [string, string])=>{
    const pluralRules = new Intl.PluralRules('en-US');
    const grammaticalNumber = pluralRules.select(count);
    switch (grammaticalNumber) {
        case 'one':
            return titles[0];
        case 'other':
            return titles[1];
        default:
            return titles[1];
    }
}