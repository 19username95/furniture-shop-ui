import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import { capitalize } from "../../utils/capitalize";
import './LoginComponent.scss'
import '../../global/Container.scss'
import {
    Title,
    BlackButton,
    CustomInput
} from "../index";
import iconShowPassword from '../../assets/icons/ic_profile.svg'
import iconHidePassword from '../../assets/icons/ic_arrow.svg'

const regexp = {
    email: new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$'),
    password: new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')
}
const regexpError = {
    email: 'Please specify the email in the next format: example@domain.com.',
    password: 'Should contain minimum eight characters, at least one letter and one number.'
}

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

    const validate = (fieldName, value) => {
        if (!value || !value.length) {
            return {
                ok: false,
                message: `${capitalize(fieldName)} should not be empty. ${regexpError[fieldName]}`
            }
        }
        if (!regexp[fieldName].test(value)) {
            return {
                ok: false,
                message: `Wrong ${fieldName} format. ${regexpError[fieldName]}`
            }
        }

        return { ok: true }
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
                                 icon={showPassword ? iconHidePassword : iconShowPassword}
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
