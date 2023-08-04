import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "./sort.svg"
import styles from "./Sort.module.css"
import classNames from "classnames";

export const Sort = ({sort, setSort, className, ...props}:SortProps):JSX.Element => {
    return <div className={classNames(className, styles.sort)} {...props}>
        <span 
            onClick={()=>setSort(SortEnum.Rating)}
            className={classNames(styles.span, {
                [styles.active]: sort == SortEnum.Rating
            })}
        >
            <SortIcon className={styles.sortIcon}/> By rating
        </span>

        <span 
            onClick={()=>setSort(SortEnum.Price)}
            className={classNames(styles.span, {
                [styles.active]: sort == SortEnum.Price
            })}
        >
            <SortIcon className={styles.sortIcon}/> By price
        </span>
    </div>
}