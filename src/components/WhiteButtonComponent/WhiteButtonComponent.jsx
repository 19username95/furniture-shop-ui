import React from "react";

import './WhiteButtonComponent.scss'

export default function WhiteButtonComponent({title, onClick}) {
    return (
        <button className='WhiteButton' onClick={onClick}>{title}</button>
    )
}