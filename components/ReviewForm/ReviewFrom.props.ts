import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface ReviewFromProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    productId: string;
}