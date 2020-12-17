import React from "react"
import {NavLink} from "react-router-dom"
import './BlackButtonComponent.scss'

export default function BlackButtonComponent({title, link, onClick}) {
    return link ?
        <NavLink to={link}><button className='BlackButton'>{title}</button></NavLink> :
        <button className='BlackButton' onClick={onClick}>{title}</button>
}