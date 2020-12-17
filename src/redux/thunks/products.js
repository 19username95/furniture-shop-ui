import {
    fetchProducts,
    productsFetched,
    loadMoreProducts,
    moreProductsLoaded,
} from "../actions/products"
import { fetch } from "../services/products"

export const fetchProductsThunk = (options) => {
    return async (dispatch) => {
        dispatch(fetchProducts())
        const { count, products } = await fetch(options)
        dispatch(productsFetched({ count, products }))
    }
}

export const loadMoreProductsThunk = (options) => {
    return async (dispatch) => {
        dispatch(loadMoreProducts())
        const { count, products } = await fetch(options)
        dispatch(moreProductsLoaded({ count, products }))
    }
}
