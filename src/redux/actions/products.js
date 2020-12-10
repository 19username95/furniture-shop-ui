export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const fetchProducts = () => ({ type: FETCH_PRODUCTS })

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED'
export const productsFetched = products => ({
    type: PRODUCTS_FETCHED,
    payload: { products }
})
