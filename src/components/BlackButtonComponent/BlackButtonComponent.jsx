import React from "react";

import './BlackButtonComponent.scss'
import {NavLink} from "react-router-dom";

export default function BlackButtonComponent({title, link, onClick}) {
    return link ?
        <NavLink to={link}><button className='BlackButton'>{title}</button></NavLink> :
        <button className='BlackButton' onClick={onClick}>{title}</button>
}