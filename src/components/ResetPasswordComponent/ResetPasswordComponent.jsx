import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import { validate } from "../validator"
import {
    Title,
    BlackButton,
    CustomInput
} from "../index"
import './ResetPasswordComponent.scss'
import '../../global/Container.scss'

export default function ResetPasswordComponent({onSubmit}) {
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className='ResetPasswordWrapper'>
            <div className='ResetPassword Container'>
                <Title>RESET YOUR PASSWORD</Title>
                <div className='ResetPassword-Container'>
                    <p className='ResetPassword-Text'>
                        Enter the email address for your Morgan account and we’ll send a single-use password reset link.
                    </p>
                    <p className='ResetPassword-Text'>
                        This link will expire after 24 hours.
                    </p>
                    <div className='ResetPassword-InputContainer'>
                        <CustomInput className='ResetPassword-Input'
                                     label='Email'
                                     placeholder='Enter your email'
                                     onChange={changeEmail}
                                     error={errors.email}
                                     onFocusOut={(e) => {
                                         const result = validate('email', e.target.value)
                                         setErrors({ ...errors, email: result.message })
                                     }}
                        />
                    </div>
                    <div className='ResetPassword-ButtonContainer'>
                        <BlackButton title='send a password reset link'
                                     onClick={() => {
                                         const emailError = validate('email', email)
                                         if (!emailError.ok) {
                                             return setErrors({
                                                 email: emailError.message
                                             })
                                         }
                                         return onSubmit(email)
                                     }}
                        />
                    </div>
                    <div className="ResetPassword-LinkContainer">
                        <NavLink className='ResetPassword-LoginLink' to='/login'>Back to login</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}