export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const fetchCategories = () => ({ type: FETCH_CATEGORIES })

export const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED'
export const categoriesFetched = categories => ({
    type: CATEGORIES_FETCHED,
    payload: { categories }
})
