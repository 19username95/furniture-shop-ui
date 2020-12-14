import { ADD_TO_CART, REMOVE_ITEM, REDUCE_QUANTITY, INCREASE_QUANTITY } from '../actions/cart'

const INITIAL_STATE = {
    items: {}
}

export default function cartReducer(state = INITIAL_STATE, action) {
    let currentItem
    let count

    switch (action.type) {
        case ADD_TO_CART:
            currentItem = state.items[action.payload.product.id]
            count = currentItem ? currentItem.count + 1 : 1
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.product.id]: { product: action.payload.product, count }
                }
            }
        case REMOVE_ITEM:
            const items = state.items
            delete items[action.payload.productId]
            return { ...state, items: {...items} }
        case INCREASE_QUANTITY:
            currentItem = state.items[action.payload.productId]
            count = currentItem.count + 1
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.productId]: {
                        ...currentItem,
                        count
                    }
                }
            }
        case REDUCE_QUANTITY:
            currentItem = state.items[action.payload.productId]
            count = currentItem.count > 1 ? currentItem.count - 1 : 0
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.productId]: {
                        ...currentItem,
                        count
                    }
                }
            }
        default:
            return state
    }
}
