import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import {validate} from "../validator";
import './CreateAccountComponent.scss'
import '../../global/Container.scss'
import {
    Title,
    BlackButton,
    CustomInput
} from "../index";
import showPasswordIcon from '../../assets/icons/ic_eye.svg'
import hidePasswordIcon from '../../assets/icons/ic_eye_slash.svg'


export default function CreateAccountComponent({ goToSignIn }) {
    const history = useHistory()

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const changeFullName = (e) => {
        setFullName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <Title>CREATE AN ACCOUNT</Title>
            <form className='CreateAccountComponent-Form'>
                <CustomInput className='CreateAccountComponent-FormInput'
                             label='Full name'
                             placeholder='Enter your full name'
                             value={fullName}
                             onChange={changeFullName}
                             error={errors.fullName}
                             onFocusOut={(e) => {
                                 const result = validate('fullName', e.target.value)
                                 setErrors({ ...errors, fullName: result.message })
                             }}
                />
                <CustomInput className='CreateAccountComponent-FormInput'
                             label='Email'
                             placeholder='Enter your email'
                             value={email}
                             onChange={changeEmail}
                             error={errors.email}
                             onFocusOut={(e) => {
                                 const result = validate('email', e.target.value)
                                 setErrors({ ...errors, email: result.message })
                             }}
                />
                <CustomInput className='CreateAccountComponent-FormInput'
                             label='Password'
                             type={showPassword ? 'text' : 'password'}
                             placeholder='Enter your password'
                             link='/reset-password'
                             linkText='Forgotten your password?'
                             value={password}
                             onChange={changePassword}
                             error={errors.password}
                             onFocusOut={(e) => {
                                 const result = validate('password', e.target.value)
                                 setErrors({ ...errors, password: result.message })
                             }}
                             icon={showPassword ? hidePasswordIcon : showPasswordIcon}
                             onIconClick={() => setShowPassword(!showPassword)}
                />
            </form>
            <BlackButton
                title='CREATE AN ACCOUNT'
                onClick={() => {
                    const fullNameError = validate('fullName', fullName)
                    const emailError = validate('email', email)
                    const passwordError = validate('password', password)
                    if (!emailError.ok || !passwordError.ok) {
                        return setErrors({
                            fullName: fullNameError.message,
                            email: emailError.message,
                            password: passwordError.message
                        })
                    }
                    return history.push('/')
                }}
            />
            <div>
                <div>Have an account?</div>
                <div onClick={goToSignIn}>Login</div>
            </div>
        </div>
    )
}
