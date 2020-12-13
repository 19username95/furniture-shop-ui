import { FETCH_PRODUCTS, PRODUCTS_FETCHED } from '../actions/products'

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
        default:
            return state
    }
}
