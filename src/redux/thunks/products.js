import axios from "axios";
import { fetchProducts, productsFetched } from "../actions/products";

export const fetchProductsThunk = () => {
    return async (dispatch) => {
        dispatch(fetchProducts())
        try {
            const { data: { products } } = await axios.get('/products')
            dispatch(productsFetched(products))
        } catch (error) {
            console.error('Fetch products error:', error)
        }
    }
}
