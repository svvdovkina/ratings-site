import { InputProps } from "./Input.props"
import classNames from "classnames"
import styles from "./Input.module.css"

export const Input = ({className, ...props} : InputProps) :  JSX.Element=>{
    return <input className={classNames(className, styles.input)} {...props} />
}