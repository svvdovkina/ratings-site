import classnames from "classnames"
import {HhDataProps} from "./HhData.props"
import styles from "./HhData.module.css"
import { Card } from "../Card/Card"
import GradeStar from "./gradeStar.svg"
import { priceRu } from "@/helpers/helpers"

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps)=>{

    return <div className={styles.hh}>
        <Card className={styles.count}>
            <div className={styles.statTitle}>Total jobs</div>
            <div className={styles.statCount}>{count}</div>
        </Card>
        <Card className={styles.salary}>
            <div>
                <div className={styles.statTitle}>Junior</div>
                <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                <div className={styles.rate}>
                    <GradeStar className={styles.filledStar}/>
                    <GradeStar/>
                    <GradeStar/>
                </div>
            </div>
            <div>
                <div className={styles.statTitle}>Middle</div>
                <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                <div className={styles.rate}>
                    <GradeStar className={styles.filledStar}/>
                    <GradeStar className={styles.filledStar}/>
                    <GradeStar/>
                </div>
            </div>
            <div>
                <div className={styles.statTitle}>Senior</div>
                <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                <div className={styles.rate}>
                    <GradeStar className={styles.filledStar}/>
                    <GradeStar className={styles.filledStar}/>
                    <GradeStar className={styles.filledStar}/>
                </div>
            </div>
            
        </Card>
    </div>
} 