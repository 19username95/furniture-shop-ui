import React from 'react'
import {pricePrettifier} from "../../utils/pricePrettifier"
import {API_URL} from "../../global/constants";
import closeIcon from '../../assets/icons/ic_close.svg'
import plusIcon from "../../assets/icons/ic_plus.svg"
import minusIcon from "../../assets/icons/ic_minus.svg"
import './CartComponent.scss'
import '../../global/Container.scss'

export default function CartComponent({items, removeItem, increaseQuantity, reduceQuantity}) {
    return (
        <div className='Cart Container'>
            {items.map(({ product, count }) => (
                <div className='CartItem'>
                    <div className='CartItem-Container'>
                        <img className='CartItem-Image'
                             alt='' src={API_URL + product.image} />
                        <div className='CartItem-Main'>
                            <div className='CartItem-Info'>
                                <div className='CartItem-Category'>{product.category.title}</div>
                                <div className='CartItem-Name'>{product.name}</div>
                            </div>
                            <div className='CartItem-QuantitySection'>
                                <span className='CartItem-QuantityLabel'>Quantity</span>
                                <div className='CartItem-QuantityManager'>
                                    <button className='CartItem-ReduceQuantity'
                                            disabled={count === 1}
                                            onClick={() => reduceQuantity(product.id)}>
                                        <img src={minusIcon} alt='-'/>
                                    </button>
                                    <div className='CartItem-Quantity'>{count}</div>
                                    <button className='CartItem-IncreaseQuantity'
                                            onClick={() => increaseQuantity(product.id)}>
                                        <img src={plusIcon} alt='+'/>
                                    </button>
                                </div>
                            </div>
                            <img className='CartItem-Remove' onClick={() => removeItem(product.id)} alt='x' src={closeIcon}/>
                            <div className='CartItem-Price'>
                                {pricePrettifier(product.price*count)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}