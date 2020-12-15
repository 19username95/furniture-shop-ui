import React from 'react'
import {connect} from "react-redux"

import "../../global/constants"
import "./ProductComponent.scss"
import icon_add from "../../assets/icons/ic_add.svg"
import icon_remove from "../../assets/icons/ic_remove_dark.svg"
import {addToCart} from "../../redux/actions/cart"
import {pricePrettifier} from "../../utils/pricePrettifier"
import {API_URL} from "../../global/constants";

function ProductComponent({ product, addToCart }) {
    return (
        <div className='Product'>
            <img className='Product-Image' alt='' src={API_URL + product.image} />
            <button className='Product-Button' onClick={() => addToCart(product)}>
                <img alt='' src={icon_add}/>
            </button>
            <div className='Product-Info'>
                <div className='Product-Name'>{product.name}</div>
                <div className='Product-Price'>{pricePrettifier(product.price)}</div>
            </div>
        </div>
    );
}

export default connect(null, dispatch => ({
    addToCart: (product) => dispatch(addToCart(product))
}))(ProductComponent)