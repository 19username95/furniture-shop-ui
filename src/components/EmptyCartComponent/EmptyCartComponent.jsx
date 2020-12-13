import React from 'react';
import { AuthTitle, BlackButton } from "../index";
import image from "../../assets/images/bulb.svg"

export default function EmptyCartComponent() {
    return (
        <div className='EmptyCart'>
            <AuthTitle>BASKET</AuthTitle>
            <div className='EmptyCart-Container Container'>
                <img alt='' src={image}/>
                <div>Your basket is empty</div>
                <BlackButton title='start shopping' link='/'/>
            </div>
        </div>
    );
}