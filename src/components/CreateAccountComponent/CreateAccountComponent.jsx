import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { validate } from "../validator"
import {
    Title,
    BlackButton,
    CustomInput,
    ThirdPartyLoginSection
} from "../index"
import './CreateAccountComponent.scss'
import '../../global/Container.scss'
import showPasswordIcon from '../../assets/icons/ic_eye.svg'
import hidePasswordIcon from '../../assets/icons/ic_eye_slash.svg'


export default function CreateAccountComponent({goToSignIn}) {
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
        <div className='CreateAccountComponentWrapper'>
            <div className='CreateAccountComponent Container'>
                <Title>CREATE AN ACCOUNT</Title>
                <div className='CreateAccountComponent-Container'>
                    <form className='CreateAccountComponent-Form'>
                        <div className='CreateAccountComponent-FormInput'>
                            <CustomInput label='Full name'
                                         placeholder='Enter your full name'
                                         value={fullName}
                                         onChange={changeFullName}
                                         error={errors.fullName}
                                         onFocusOut={(e) => {
                                             const result = validate('fullName', e.target.value)
                                             setErrors({ ...errors, fullName: result.message })
                                         }}
                            />
                        </div>
                        <div className='CreateAccountComponent-FormInput'>
                            <CustomInput label='Email'
                                         placeholder='Enter your email'
                                         value={email}
                                         onChange={changeEmail}
                                         error={errors.email}
                                         onFocusOut={(e) => {
                                             const result = validate('email', e.target.value)
                                             setErrors({ ...errors, email: result.message })
                                         }}
                            />
                        </div>
                        <div className='CreateAccountComponent-FormInput'>
                            <CustomInput className='CreateAccountComponent-FormInput'
                                         label='Password'
                                         type={showPassword ? 'text' : 'password'}
                                         placeholder='Enter your password'
                                         labelHint='(min 6 char)'
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
                        </div>
                    </form>
                    <div className='CreateAccountComponent-AgreeText'>
                        By creating an account you agree to the website
                        <a className='CreateAccountComponent-AgreeLink' href='/'> terms and conditions </a>
                         and our
                        <a className='CreateAccountComponent-AgreeLink' href='/'> privacy notice </a>.
                    </div>
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
                    <div className='CreateAccountComponent-Login'>
                        <div className='CreateAccountComponent-LoginTitle'>
                            Have an account?
                        </div>
                        <div className='CreateAccountComponent-LoginLink'
                             onClick={goToSignIn}>
                            Login
                        </div>
                    </div>
                    <ThirdPartyLoginSection />
                </div>
            </div>
        </div>
    )
}
