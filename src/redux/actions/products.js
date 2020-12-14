export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const fetchProducts = () => ({ type: FETCH_PRODUCTS })

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'
export const productsFetched = ({ count, products }) => ({
    type: PRODUCTS_FETCHED,
    payload: { count, products }
})

export const LOAD_MORE_PRODUCTS = 'LOAD_MORE_PRODUCTS'
export const loadMoreProducts = () => ({ type: LOAD_MORE_PRODUCTS })

export const MORE_PRODUCTS_LOADED = 'MORE_PRODUCTS_LOADED'
export const moreProductsLoaded = ({ count, products }) => ({
    type: MORE_PRODUCTS_LOADED,
    payload: { count, products }
})
