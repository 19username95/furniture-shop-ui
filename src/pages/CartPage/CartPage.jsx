import React, {useState} from 'react';
import {EmptyCart, Cart} from "../../components";

export default function CartPage () {
    const [mode, setMode] = useState('empty')

    switch(mode) {
        case "empty":
            return <EmptyCart />
        case "not-empty":
        default:
            return <Cart />

    }
}