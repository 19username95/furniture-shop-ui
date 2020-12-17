import React from 'react'
import {NavLink} from "react-router-dom"
import {
    BlackButton,
    CartItem
} from "../index"
import { pricePrettifier } from "../../utils/pricePrettifier"
import './CartComponent.scss'
import '../../global/Container.scss'

export default function CartComponent({items, removeItem, increaseQuantity, reduceQuantity, onSubmit}) {
    return (
        <div className='Cart'>
            <div className='Cart-FullOrder'>
                {items.map(({ product, count }) => (
                    <div className='Cart-Product' key={product.id}>
                        <CartItem product={product}
                                  count={count}
                                  increaseQuantity={increaseQuantity}
                                  reduceQuantity={reduceQuantity}
                                  removeItem={removeItem} />
                    </div>
                ))}
            </div>
            <div className='Cart-SummaryOrder'>
                <div className='Cart-SummaryContainer'>
                    <div className='Cart-SummaryTitle'>Order Summary</div>
                    <div className='Cart-SummaryProducts'>
                        {items.map(({ product }) => (
                            <div className='Cart-SummaryProduct'
                                 key={product.id}>
                                <div className='Cart-SummaryProductName'>
                                    {product.name}
                                </div>
                                <div className='Cart-SummaryProductPrice'>
                                    {pricePrettifier(product.price)}
                                </div>
                            </div>
                        ))}
                        <div className='Cart-SummaryProduct'>
                            <div className='Cart-SummaryProductName'>Express Delivery</div>
                            <div className='Cart-SummaryProductPrice'>{pricePrettifier(10)}</div>
                        </div>
                    </div>
                    <div className='Cart-SummaryTotalContainer'>
                        <span className='Cart-TotalTitle'>Estimated Total</span>
                        <span className='Cart-TotalSum'>
                            {pricePrettifier(items.reduce((sum, item) => sum + (item.product.price * item.count), 0))}
                        </span>
                    </div>
                </div>
                <div className='Cart-CheckoutButtonContainer'>
                    <BlackButton className='Cart-CheckoutButton'
                                 title='checkout'
                                 onClick={onSubmit} />
                </div>
            </div>
            <NavLink className='Cart-HomeLink' to='/'>Continue shopping</NavLink>
        </div>
    );
}