import {
    FETCH_PRODUCTS,
    PRODUCTS_FETCHED,
    LOAD_MORE_PRODUCTS,
    MORE_PRODUCTS_LOADED,
} from '../actions/products'

const INITIAL_STATE = {
    list: [],
    loading: false,
    hasMore: false
}

export default function productsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, loading: true, hasMore: false }
        case PRODUCTS_FETCHED:
            return {
                loading: false,
                list: action.payload.products,
                hasMore: action.payload.products.length < action.payload.count
            }
        case LOAD_MORE_PRODUCTS:
            return { ...state, loading: true, hasMore: false }
        case MORE_PRODUCTS_LOADED:
            const list = [...state.list, ...action.payload.products]
            return { loading: false, list, hasMore: list.length < action.payload.count }
        default:
            return state
    }
}
