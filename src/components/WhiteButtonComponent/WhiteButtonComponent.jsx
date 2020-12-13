import React from "react";

import './WhiteButtonComponent.scss'

export default function WhiteButtonComponent(props) {
    return (
        <button className='WhiteButton'>{props.title}</button>
    )
}