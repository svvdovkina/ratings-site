import { TextAreaProps } from "./TextArea.props"
import classNames from "classnames"
import styles from "./TextArea.module.css"

export const TextArea = ({className, ...props} : TextAreaProps) :  JSX.Element=>{
    return <textarea className={classNames(className, styles.input)} {...props} />
}