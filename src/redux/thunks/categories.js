import axios from "axios";
import { fetchCategories, categoriesFetched } from "../actions/categories";

export const fetchCategoriesThunk = () => {
    return async (dispatch) => {
        dispatch(fetchCategories())
        try {
            const { data: { categories } } = await axios.get('/categories')
            dispatch(categoriesFetched(categories))
        } catch (error) {
            console.error('Fetch categories error:', error)
        }
    }
}
