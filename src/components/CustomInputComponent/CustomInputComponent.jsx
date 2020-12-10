import React from "react";
import {NavLink} from "react-router-dom";

import './CustomInputComponent.scss'

export default function CustomInputComponent({ label, labelHint, link, linkText, placeholder, type='text' }) {
    return (
        <div className='CustomInput'>
            <div className='CustomInput-Container'>
                <div className='CustomInput-Label'>
                    {label}
                    <span className='CustomInput-LabelHint'> {labelHint}</span>
                </div>
                <NavLink className='CustomInput-Link' to={link}>{linkText}</NavLink>
            </div>
            <input className='CustomInput-Field'
                   type={type}
                   placeholder={placeholder} />
        </div>
    )
}
