import React from "react"
import { pricePrettifier } from "../../utils/pricePrettifier"
import "./CartPopUpComponent.scss"
import { API_URL } from "../../global/constants"
import { BlackButton } from "../index"

function CartPopUpComponent ({items, onMouseLeave}) {
    return (
        <div className='CartPopUp' onMouseLeave={onMouseLeave}>
            <div className='CartPopUp-ProductsContainer'>
                {
                    items.map(({ product, count }) => (
                        <div className='CartPopUp-ProductContainer' key={product.id}>
                            <div className='CartPopUp-ProductImageContainer'>
                                <img className='CartPopUp-ProductImage'
                                     src={API_URL + product.image} alt=''
                                     draggable={false} />
                            </div>
                            <div className='CartPopUp-ProductInfo'>
                                <div className='CartPopUp-ProductName'>{product.name}</div>
                                <div className='CartPopUp-ProductDetails'>
                                    <span className='CartPopUp-ProductCount'>{count} x </span>
                                    <span className='CartPopUp-ProductPrice'>{pricePrettifier(product.price)}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='CartPopUp-ButtonContainer'>
                <BlackButton className='CartPopUp-Button' title='go to checkout' link='/cart' />
            </div>
        </div>
    )
}

export default CartPopUpComponent