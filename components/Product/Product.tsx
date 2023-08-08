import { Card, Button, Htag, Tag, Ptag, Rating } from "../";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css"
import Image from "next/image";
import { pluralize, priceRu } from "@/helpers/helpers";
import ThrophyImage from "./throphy.svg"
import classNames from "classnames";

export const Product = ({product, className, ...props}: ProductProps) : JSX.Element =>{
    const imageURL = process.env.NEXT_PUBLIC_DOMAIN + product.image;
    return <Card className={styles.card}>
        <div className={styles.titleRow}>
            <div className={styles.logoTitle}>
                <div ><Image loader={({width})=>imageURL+`?w=${width}`} className={styles.logo} src={imageURL} alt="logo" width={70} height={70} /></div>
                <div>
                    <Htag tag="h2">
                        {product.title}
                        <span className={styles.throphyIcon} ><ThrophyImage/></span>
                    </Htag>
                    <div className={styles.tags}>
                        {product.categories.map((tag, i)=>{
                            return <Tag key={i}>{tag}</Tag>
                        })}
                    </div>
                </div>
                
            </div>
            <div className={styles.prices}>
                <div className={styles.singlePrice}>
                    <span> 
                        <span className={styles.priceValue}>{priceRu(product.price)}</span> 
                        {product.oldPrice && <Tag color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
                    </span>
                    <span className={styles.priceLabel}>price</span>
                </div>
                <div className={styles.singlePrice}>
                    <span>
                        <span className={styles.priceValue}>{priceRu(product.credit)}</span> 
                        <span className={styles.creditPeriod}>/ month </span>
                    </span>
                    <span className={styles.priceLabel}>on credit</span>
                </div>
                <div className={styles.singlePrice}>
                    <Rating rating={product.reviewAvg || product.initialRating}/>
                    <span className={styles.priceLabel}>{product.reviewCount} {pluralize(product.reviewCount, ['review', 'reviews'])}</span>
                </div>
            </div>
        </div>

        <Ptag className={styles.description}>{product.description}</Ptag>

        <div className={styles.infoRow}>
            <div >
                {product.characteristics.map((charact, i)=>{
                    return <div className={styles.cheracteristic} key={i}>
                        <span className={styles.charName}>{charact.name}</span>
                        <span className={styles.dotted}></span>
                        <span className={styles.charValue}>{charact.value}</span>
                    </div>
                })}
                <div className={styles.tags}>
                    {product.tags.map((tag, i)=>{
                        return <Tag key={i}>{tag}</Tag>
                    })}
                </div>
            </div>
            <div>
                <div className={styles.avdBlock}>
                    <h5 className={styles.advTitle}>Advantages</h5>
                    <Ptag>{product.advantages || "-"}</Ptag>
                </div>
                <div className={classNames(styles.avdBlock, styles.red)}>
                    <h5 className={styles.advTitle}>Disdvantages</h5>
                    <Ptag>{product.disadvantages || "-"}</Ptag>
                </div>
            </div>
        </div>

        <div className={styles.buttonsRow}>
            <Button appearance='primary'>Learn more</Button>
            <Button appearance='ghost' arrow='right'>Read reviews</Button>
        </div>
        
    </Card>
}