import React, {useState} from "react"

import './ResetPasswordComponent.scss'
import '../../global/Container.scss'
import { Title, BlackButton, CustomInput } from "../index";
import { NavLink } from "react-router-dom";

export default function ResetPasswordComponent({onSubmit}) {
    const [email, setEmail] = useState('')

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className='ResetPassword'>
            <Title>RESET YOUR PASSWORD</Title>
            <div className='ResetPassword-Container Container'>
                <p className='ResetPassword-Text'>
                    Enter the email address for your Morgan account and we’ll send a single-use password reset link.
                </p>
                <p className='ResetPassword-Text'>
                    This link will expire after 24 hours.
                </p>
                <CustomInput className='ResetPassword-Input'
                             label='Email'
                             placeholder='Enter your email'
                             onChange={changeEmail}
                />
                <BlackButton title='send a password reset link'
                             onClick={() => onSubmit(email)}
                />
                <NavLink className='ResetPassword-Link' to='/login'>Back to login</NavLink>
            </div>
        </div>
    )
}