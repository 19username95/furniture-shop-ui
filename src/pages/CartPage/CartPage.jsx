import React, {useState} from 'react'
import {connect} from "react-redux"
import {
    Cart,
    Title,
    BlackButton,
    WhiteButton
} from "../../components"
import {
    increaseQuantity,
    reduceQuantity,
    removeItem,
    cleanCart
} from "../../redux/actions/cart"
import imageBulb from "../../assets/images/bulb.svg"
import imageBulbOn from "../../assets/images/bulb_on.svg"
import "./CartPage.scss"
import "../../global/Container.scss"
import {dateFormat} from "../../utils/dateFormat"
import {Link} from "react-router-dom";

function CartPage ({items, removeItem, increaseQuantity, reduceQuantity, cleanCart}) {
    const [orderSent, setOrderSent] = useState(false)
    const [orderDate, setOrderDate] = useState(null)

    function sendOrder() {
        createOrderDate()
        setOrderSent(true)
        cleanCart()
    }

    function clearOrder() {
        setOrderSent(false)
    }

    function createOrderDate() {
        setOrderDate(Date.now())
    }

    if (orderSent) {
        return (
            <div className='SuccessOrderWrapper'>
                <div className='SuccessOrder Container'>
                    <Title>THANK YOU!</Title>
                    <div className='SuccessOrder-Container'>
                        <div className='SuccessOrder-ImageContainer'>
                            <img className='SuccessOrder-Image' alt='' src={imageBulbOn}/>
                        </div>
                        <div className='SuccessOrder-Title'>
                            Your ordering is completely successful
                        </div>
                        <div className='SuccessOrder-Subtitle'>
                            We'll let you know when it ships and it headed your way.
                        </div>
                        <div className='SuccessOrder-OrderInfo'>
                            <div className='SuccessOrder-Info'>
                                <span>Order:</span> <span className='SuccessOrder-InfoValue'><b>0844253425</b></span>
                            </div>
                            <div className='SuccessOrder-Info'>
                                <span>Date:</span> <span className='SuccessOrder-InfoValue'><b>{dateFormat(orderDate)}</b></span>
                            </div>
                        </div>
                        <Link to='/'>
                            <WhiteButton className='SuccessOrder-Button' title={'continue shopping'} onClick={clearOrder}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return items.length ?
        <div className='CartWrapper'>
            <div className='CartContainer Container'>
                <Title>BASKET</Title>
                <Cart
                    items={items}
                    removeItem={removeItem}
                    increaseQuantity={increaseQuantity}
                    reduceQuantity={reduceQuantity}
                    onSubmit={sendOrder}
                />
            </div>
        </div>
        :
        <div className='EmptyCartWrapper'>
            <div className='EmptyCart Container'>
                <Title>BASKET</Title>
                <div className='EmptyCart-Container'>
                    <img className='EmptyCart-Image'
                         alt='' src={imageBulb}
                         draggable={false} />
                    <div className='EmptyCart-Text'>Your basket is empty</div>
                    <div className='EmptyCart-BlackButtonWrapper'>
                        <BlackButton className='EmptyCart-BlackButton'
                                     title='start shopping'
                                     link='/' />
                    </div>
                </div>
            </div>
        </div>
}

export default connect((state) => ({
    items: Object.values(state.cart.items),
}), dispatch => ({
    cleanCart: () => dispatch(cleanCart()),
    removeItem: (productId) => dispatch(removeItem(productId)),
    increaseQuantity: (productId) => dispatch(increaseQuantity(productId)),
    reduceQuantity: (productId) => dispatch(reduceQuantity(productId)),
}))(CartPage)