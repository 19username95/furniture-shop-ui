import { FETCH_CATEGORIES, CATEGORIES_FETCHED } from '../actions/categories'

const INITIAL_STATE = {
    list: [],
    loading: false
}

export default function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, loading: true }
        case CATEGORIES_FETCHED:
            return { loading: false, list: action.payload.categories }
        default:
            return state
    }
}
