import React from 'react'
import './CartComponent.scss'
import '../../global/Container.scss'
import {
    BlackButton,
    CartItem
} from "../index";

export default function CartComponent({items, removeItem, increaseQuantity, reduceQuantity, onSubmit}) {
    return (
        <div className='Cart Container'>
            <div className='Cart-FullOrder'>
                {items.map(({ product, count }) => (
                    <CartItem product={product}
                              count={count}
                              increaseQuantity={increaseQuantity}
                              reduceQuantity={reduceQuantity}
                              removeItem={removeItem} />
                ))}
            </div>
            <div className='Cart-SummaryOrder'>
                <BlackButton title='checkout' onClick={onSubmit} />
            </div>
        </div>
    );
}