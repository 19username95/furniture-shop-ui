import React from 'react';
import {
    Cart,
    AuthTitle,
    BlackButton
} from "../../components";
import {connect} from "react-redux";
import {
    increaseQuantity,
    reduceQuantity,
    removeItem
} from "../../redux/actions/cart";
import image from "../../assets/images/bulb.svg";

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
                <img alt='' src={image}/>
                <div>Your basket is empty</div>
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