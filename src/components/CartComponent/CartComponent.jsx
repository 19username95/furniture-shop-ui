import React from 'react';
import {pricePrettifier} from "../../utils/pricePrettifier"
import closeIcon from '../../assets/icons/ic_close.svg'

export default function CartComponent({items, removeItem, increaseQuantity, reduceQuantity}) {
    return (
        <div className='Cart'>
            {items.map(({ product, count }) => (
                <div className='CartItem'>
                    <div className='CartItem-Container'>
                        <img className='CartItem-Image'
                             alt='' src={product.image} />
                        <div className='CartItem-Main'>
                            <div className='CartItem-Info'>
                                <div className='CartItem-Category'>{product.category.alias}</div>
                                <div className='CartItem-Name'>{product.name}</div>
                            </div>
                            <div className='CartItem-Quantity'>
                                Quantity
                                <button className='CartItem-ReduceQuantity'
                                        disabled={count === 1}
                                        onClick={() => reduceQuantity(product.id)}>
                                    -
                                </button>
                                <div className='CartItem-Quantity'>{count}</div>
                                <button className='CartItem-IncreaseQuantity'
                                        onClick={() => increaseQuantity(product.id)}>
                                    +
                                </button>
                            </div>
                            <button className='CartItem-Remove'
                                    onClick={() => removeItem(product.id)}>
                                <img alt='x' src={closeIcon}/>
                            </button>
                            <div>{pricePrettifier(product.price)}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}