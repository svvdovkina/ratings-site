import { withLayout } from '../../layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from "axios";
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '@/interfaces/product.interface';

const firstCategory = 0;

function Course({menu, page, products}: CourseProps) : JSX.Element {

  return (
      <>
       <p>{products? products.length : 'no products'}</p>
       <p>{page? page.alias : 'no page alias'}</p>
      </>
  )

}

export default withLayout(Course);


export const getStaticPaths: GetStaticPaths = async () => {
    
    const urlMenu = '/api/top-page/find';
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + urlMenu, {firstCategory});
    
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>)=>{
  
    if (!params) {
        return {
            notFound: true
        }
    }
  
    const urlMenu = '/api/top-page/find';
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + urlMenu, {firstCategory});
    
    const urlPage = '/api/top-page/byAlias/' + params.alias;
    const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + urlPage);
    
    const urlProducts = '/api/product/find';
    const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + urlProducts, 
        {category: page.category, limit: 10});
    
    return {
    props: {
        menu,
        firstCategory,
        page,
        products
    }
    }
}

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}

