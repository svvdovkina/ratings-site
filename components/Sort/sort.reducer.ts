import { ProductModel } from "@/interfaces/product.interface";
import { initialize } from "next/dist/server/lib/render-server";
import { SortEnum } from "./Sort.props"

export type SortActions = 
{type: SortEnum.Price} 
| {type: SortEnum.Rating}
| {type: 'reset', initialState: ProductModel[]};

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
        case 'reset':
            return {
                sort: SortEnum.Rating,
                products: action.initialState
            }
        default:
            throw new Error('Unexpected sorting type')
    }
}