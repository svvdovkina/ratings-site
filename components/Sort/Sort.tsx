import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "./sort.svg"
import styles from "./Sort.module.css"
import classNames from "classnames";

export const Sort = ({sort, setSort, className, ...props}:SortProps):JSX.Element => {
    return <div className={classNames(className, styles.sort)} {...props}>
        <button 
            onClick={()=>setSort(SortEnum.Rating)}
            className={classNames(styles.sortItem, {
                [styles.active]: sort == SortEnum.Rating
            })}
        >
            <SortIcon className={styles.sortIcon}/> By rating
        </button>

        <button 
            onClick={()=>setSort(SortEnum.Price)}
            className={classNames(styles.sortItem, {
                [styles.active]: sort == SortEnum.Price
            })}
        >
            <SortIcon className={styles.sortIcon}/> By price
        </button>
    </div>
}