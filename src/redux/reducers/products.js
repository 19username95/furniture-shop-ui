import {
    FETCH_PRODUCTS,
    PRODUCTS_FETCHED,
    LOAD_MORE_PRODUCTS,
    MORE_PRODUCTS_LOADED,
} from '../actions/products'

const INITIAL_STATE = {
    list: [],
    loading: false
}

export default function productsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { ...state, loading: true }
        case PRODUCTS_FETCHED:
            return { loading: false, list: action.payload.products }
        case LOAD_MORE_PRODUCTS:
            return { ...state, loading: true }
        case MORE_PRODUCTS_LOADED:
            return { loading: false, list: [...state.list, ...action.payload.products] }
        default:
            return state
    }
}
