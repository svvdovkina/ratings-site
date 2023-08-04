import { ProductModel } from "@/interfaces/product.interface";
import { SortEnum } from "./Sort.props"

export type SortActions = {
    type: SortEnum.Price
} | {type: SortEnum.Rating};

export interface SortReducerState {
    sort: SortEnum;
    products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
    switch(action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((pr1, pr2)=>(pr1.initialRating - pr2.initialRating))
            }
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((pr1, pr2)=>(pr1.price - pr2.price))
            }
        default:
            throw new Error('Unexpected sorting type')
    }
}