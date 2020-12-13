import {
    fetchProducts,
    productsFetched,
    loadMoreProducts,
    moreProductsLoaded,
} from "../actions/products";
import { fetch } from "../services/products";

export const fetchProductsThunk = (options) => {
    return async (dispatch) => {
        dispatch(fetchProducts())
        const products = await fetch(options)
        dispatch(productsFetched(products))
    }
}

export const loadMoreProductsThunk = (options) => {
    return async (dispatch) => {
        dispatch(loadMoreProducts())
        const products = await fetch(options)
        dispatch(moreProductsLoaded(products))
    }
}
