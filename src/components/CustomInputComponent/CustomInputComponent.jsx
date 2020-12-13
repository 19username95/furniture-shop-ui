import React from "react";
import {NavLink} from "react-router-dom";

import './CustomInputComponent.scss'

export default function CustomInputComponent({ label, labelHint, link, linkText, placeholder, type='text',
                                                 value, onChange }) {
    return (
        <div className='CustomInput'>
            <div className='CustomInput-Container'>
                <div className='CustomInput-Label'>
                    {label}
                    <span className='CustomInput-LabelHint'> {labelHint}</span>
                </div>
                {link ?
                    <NavLink className='CustomInput-Link' to={link}>{linkText}</NavLink>
                    : null}
            </div>
            <input className='CustomInput-Field'
                   type={type}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}
            />
        </div>
    )
}
