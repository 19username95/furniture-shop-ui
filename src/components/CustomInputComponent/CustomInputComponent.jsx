import React from "react"
import { NavLink } from "react-router-dom"
import './CustomInputComponent.scss'

export default function CustomInputComponent({ label, labelHint, link, linkText, placeholder, type='text',
                                                 value, onChange, onFocusOut, error, icon, onIconClick }) {
    return (
        <div className='CustomInput'>
            <div className='CustomInput-Header'>
                <div className='CustomInput-Label'>
                    {label}
                    <span className='CustomInput-LabelHint'> {labelHint}</span>
                </div>
                {link ?
                    <NavLink className='CustomInput-Link' to={link}>{linkText}</NavLink>
                    : null}
            </div>
            <div className='CustomInput-Container'>
                <input className='CustomInput-Field'
                       type={type}
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       onBlur={onFocusOut}
                />
                {icon ? <img className='CustomInput-Icon' alt='' src={icon} draggable={false} onClick={onIconClick} /> : null}
            </div>
            {error ? <div className='CustomInput-Error'>{error}</div> : null}
        </div>
    )
}
