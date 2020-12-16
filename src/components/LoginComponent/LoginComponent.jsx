import React, {useState} from "react";

import './LoginComponent.scss'
import '../../global/Container.scss'
import {
    Title,
    BlackButton,
    CustomInput
} from "../index";

export default function LoginComponent({goToSignUp}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /*
    const setters = {
        setEmail,
        setPassword
    }

    const changeField = (fieldName) => (e) => {
        return setters[`set${fieldName}`](e.target.value)
    }
    */

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
                        // onChange={changeField('Email')}
                                 onChange={changeEmail}
                    />
                    <CustomInput className='LoginPage-FormInput'
                                 label='Password'
                                 placeholder='Enter your password'
                                 link='/reset-password'
                                 linkText='Forgotten your password?'
                                 value={password}
                        // onChange={changeField('Password')}
                                 onChange={changePassword}
                    />
                </form>
                <div>
                    <div>Don't have an account?</div>
                    <div onClick={goToSignUp}>Create an account</div>
                </div>
                <BlackButton title='login'
                             link='/' />
            </div>
        </div>
    )
}
