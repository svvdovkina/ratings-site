import { Htag, Ptag, Tag } from '@/components'
import {TopPageComponentProps} from './TopPage.props'
import styles from './TopPage.module.css'
import { HhData } from '@/components/HhData/HhData'
import { TopLevelCategory } from '@/interfaces/page.interface'
import ChekMark from "./checkMark.svg"

const AdvantageItem = ({title, text}: {title: string, text: string}): JSX.Element=>{
    return <div className={styles.advItem}>
        <ChekMark/>
        <Htag tag='h3'>{title}</Htag>
        <div className={styles.vline}></div>
        <Ptag>{text}</Ptag>
    </div>
}

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element =>{
    return <div className={styles.wrapper}>
        <div className={styles.title}>
            <Htag tag='h1'>{page.title}</Htag>
            <Tag color='gray' size='m'>{products?.length}</Tag>
            <span>Sorting</span>
        </div>
        <div>
            {products && products.map(product=>{
                return <div key={product._id} >
                    {product.title}
                </div>
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

        <div className={styles.tags}>
            <Htag tag='h2'>Skills you will gain</Htag>
            {page.tags.map((tag, i)=>{
                return <Tag key={i} color='primary' size='s'>{tag}</Tag>
            })}
        </div>
            
    </div>
}