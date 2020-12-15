import React from 'react'
import {connect} from "react-redux"
import {
    Cart,
    AuthTitle,
    BlackButton
} from "../../components"
import {
    increaseQuantity,
    reduceQuantity,
    removeItem
} from "../../redux/actions/cart"
import image from "../../assets/images/bulb.svg"
import "./CartPage.scss"
import "../../global/Container.scss"

function CartPage ({items, removeItem, increaseQuantity, reduceQuantity}) {
    return items.length ? <Cart
        items={items}
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        reduceQuantity={reduceQuantity}
    />
    : <div className='EmptyCart'>
            <AuthTitle>BASKET</AuthTitle>
            <div className='EmptyCart-Container Container'>
                <img className='EmptyCart-Image' alt='' src={image}/>
                <div className='EmptyCart-Text'>Your basket is empty</div>
                <BlackButton title='start shopping' link='/'/>
            </div>
    </div>
}

export default connect((state) => ({
    items: Object.values(state.cart.items),
}), dispatch => ({
    removeItem: (productId) => dispatch(removeItem(productId)),
    increaseQuantity: (productId) => dispatch(increaseQuantity(productId)),
    reduceQuantity: (productId) => dispatch(reduceQuantity(productId)),
}))(CartPage)