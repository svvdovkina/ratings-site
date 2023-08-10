import { Htag, Ptag, Tag, Sort, HhData, Product, Button } from '@/components'
import {TopPageComponentProps} from './TopPage.props'
import styles from './TopPage.module.css'
import { TopLevelCategory } from '@/interfaces/page.interface'
import ChekMark from "./checkMark.svg"
import {useEffect, useReducer} from "react"
import { sortReducer } from '@/components/Sort/sort.reducer'
import { SortEnum } from '@/components/Sort/Sort.props'
import { useScrollY } from '@/hooks/useScrollY'
import classNames from 'classnames'

const AdvantageItem = ({title, text}: {title: string, text: string}): JSX.Element=>{
    return <div className={styles.advItem}>
        <ChekMark/>
        <Htag tag='h3'>{title}</Htag>
        <div className={styles.vline}></div>
        <Ptag>{text}</Ptag>
    </div>
}

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element =>{
    
    const [sortState, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating})
    
    const setSort = (sort: SortEnum)=>{
        dispatchSort({type: sort})
    }

    const scrollToTop = ()=>{
        window.scrollTo({ top: 10, behavior: 'smooth' });
    }

    useEffect(()=>{
        dispatchSort({type:'reset', initialState: products});
    }, [products])

    const [y, vh] = useScrollY();

    return <div className={styles.wrapper}>
        <div className={styles.titleRow}>
            <div className={styles.titleMain}>
                <Htag tag='h1'>{page.title}</Htag>
                <Tag color='gray' size='m' className={styles.countTag}>{products?.length}</Tag>
            </div>
            <Sort sort={sortState.sort} setSort={setSort}/>
        </div>
        <Button 
            appearance='primary'
            className={classNames(styles.fixedBtn, {
                [styles.hiddenBtn]: y <= vh,
                [styles.showBtn]: y > vh,
            })}
            onClick={scrollToTop}
        >
            Go up &uarr;
        </Button>
        <div>
            {sortState.products && sortState.products.map(product=>{
                return <Product product={product} key={product._id} />
            })}
        </div>

        <div className={styles.hhTitle}>
            <Htag tag='h2'>Jobs - {page.category}</Htag>
            <Tag color='red' size='m'>hh.ru</Tag>
        </div>
        {page.hh && firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
        
        <div className={styles.advantages}>
            <Htag tag='h2'>Advantages</Htag>
            <div className={styles.advList}>
                {page.advantages?.map(avd=>{
                    return <AdvantageItem 
                            key={avd._id} 
                            title={avd.title}
                            text={avd.description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quasi non tempore sint at nihil totam cum magni natus ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quasi non tempore sint at.'}
                            />
                })}
            </div>
            <Ptag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur ex odio, magni sit doloribus praesentium pariatur eos vel voluptatibus voluptas explicabo labore. Sunt culpa nisi unde iste at modi.</Ptag>
        </div>

        <div>
            <Htag tag='h2'>Skills you will gain</Htag>
            <div className={styles.tags}>
                {page.tags.map((tag, i)=>{
                    return <Tag key={i} color='primary' size='s'>{tag}</Tag>
                })}
            </div>
        </div>
            
    </div>
}