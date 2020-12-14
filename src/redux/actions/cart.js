export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: { product }
})

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const removeItem = (productId) => ({
    type: REMOVE_ITEM,
    payload: { productId }
})

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const increaseQuantity = (productId) => ({
    type: INCREASE_QUANTITY,
    payload: { productId }
})

export const REDUCE_QUANTITY = 'REDUCE_QUANTITY'
export const reduceQuantity = (productId) => ({
    type: REDUCE_QUANTITY,
    payload: { productId }
})
