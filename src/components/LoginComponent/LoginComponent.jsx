import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import {validate} from "../validator";
import './LoginComponent.scss'
import '../../global/Container.scss'
import {
    Title,
    BlackButton,
    CustomInput
} from "../index";
import showPasswordIcon from '../../assets/icons/ic_eye.svg'
import hidePasswordIcon from '../../assets/icons/ic_eye_slash.svg'

export default function LoginComponent({goToSignUp}) {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='LoginPage'>
            <div className='LoginPage-Container Container'>
                <Title>login</Title>
                <form className='LoginPage-Form'>
                    <CustomInput className='LoginPage-FormInput'
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
                    <CustomInput className='LoginPage-FormInput'
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
                <div>
                    <div>Don't have an account?</div>
                    <div onClick={goToSignUp}>Create an account</div>
                </div>
                <BlackButton
                    title='login'
                    onClick={() => {
                        const emailError = validate('email', email)
                        const passwordError = validate('password', password)
                        if (!emailError.ok || !passwordError.ok) {
                            return setErrors({
                                email: emailError.message,
                                password: passwordError.message
                            })
                        }
                        return history.push('/')
                    }}
                />
            </div>
        </div>
    )
}
