import React from 'react'
import {connect} from "react-redux"

import "../../global/constants"
import "./ProductComponent.scss"
import icon_add from "../../assets/icons/ic_add.svg"
import icon_remove from "../../assets/icons/ic_remove_dark.svg"
import {addToCart, removeItem} from "../../redux/actions/cart"
import {pricePrettifier} from "../../utils/pricePrettifier"
import {API_URL} from "../../global/constants";

function ProductComponent({ product, addToCart, removeItem, isInCart }) {

    const changeProductState = (product) => {
        if(isInCart) {
            removeItem(product.id)
        } else {
            addToCart(product)
        }
    }

    return (
        <div className='Product'>
            <img className='Product-Image'
                 alt='' src={API_URL + product.image}
                 draggable={false} />
            <button className='Product-Button' onClick={() => changeProductState(product)}>
                <img alt='' src={isInCart ? icon_remove : icon_add}
                     draggable={false} />
            </button>
            <div className='Product-Info'>
                <div className='Product-Name'>{product.name}</div>
                <div className='Product-Price'>{pricePrettifier(product.price)}</div>
            </div>
        </div>
    );
}

export default connect((state, ownProps) => ({
    isInCart: !!state.cart.items[ownProps.product.id]
}), dispatch => ({
    addToCart: (product) => dispatch(addToCart(product)),
    removeItem: (productId) => dispatch(removeItem(productId))
}))(ProductComponent)