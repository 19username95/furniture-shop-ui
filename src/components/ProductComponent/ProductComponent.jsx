import React from 'react';

import "./ProductComponent.scss"
import icon_add from "../../assets/icons/ic_add.svg"
import icon_remove from "../../assets/icons/ic_remove_dark.svg"

export default function ProductComponent({ product }) {

    function toFloat(integer) {
        return (+integer).toFixed(2)
    }

    return (
        <div className='Product'>
            <img className='Product-Image' alt='' src={product.image} />
            <button className='Product-Button'>
                <img alt='' src={icon_add}/>
            </button>
            <div className='Product-Info'>
                <div className='Product-Name'>{product.name}</div>
                <div className='Product-Price'>£{toFloat(product.price)}</div>
            </div>
        </div>
    );
}
