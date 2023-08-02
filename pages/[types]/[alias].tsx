import { withLayout } from '../../layout/Layout';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import axios from "axios";
import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';

function Course({menu, page, products}: CourseProps) : JSX.Element {

  return <div>
    Hello
    <p>{products?.length}</p>
  </div>

}

export default withLayout(Course);


export const getStaticPaths = async () => {
    
    let paths: object[] = [];

    const urlMenu = '/api/top-page/find';

    for (const flMenu of firstLevelMenu) {
        const {data: menu} = await axios.post<MenuItem[]>
            (process.env.NEXT_PUBLIC_DOMAIN + urlMenu, 
                {firstCategory: flMenu.id});
        paths = paths.concat(menu.flatMap(m => m.pages.map(p => 
            {return { params: {
                            types: flMenu.route,
                            alias: p.alias,
                        }
                    }
            })))
    }

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>)=>{
  
    if (!params) {
        return {
            notFound: true
        }
    }

    const firstCategoryItem = firstLevelMenu.find(m=> m.route === params.types)
  
    if (!firstCategoryItem) {
        return {
            notFound: true
        }
    }

    try {
        const urlMenu = '/api/top-page/find';
        const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + urlMenu, 
                {firstCategory: firstCategoryItem.id});
        
        const urlPage = '/api/top-page/byAlias/' + params.alias;
        const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + urlPage);
        
        const urlProducts = '/api/product/find';
        const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + urlProducts, 
            {category: page.category, limit: 10});

        return {
            props: {
                menu: menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        }
        
    } catch (error) {
        return {
            notFound: true
        }
    }

    
    
    
}

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

