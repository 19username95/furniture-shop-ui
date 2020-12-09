import React from "react";

import './WhiteButton.scss'

export default function WhiteButton(props) {
    return (
        <button className='WhiteButton'>{props.title}</button>
    )
}