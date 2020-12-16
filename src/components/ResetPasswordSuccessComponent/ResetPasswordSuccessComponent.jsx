import React from "react"

import './ResetPasswordSuccessComponent.scss'
import '../../global/Container.scss'
import { Title } from "../index";

export default function ResetPasswordSuccessComponent({ email }) {
    return (
        <div className='ResetPasswordSuccess'>
            <Title>YOUR LINK HAS BEEN SENT</Title>
            <div className='ResetPasswordSuccess-Container Container'>
                <img className='ResetPasswordSuccess-Image' alt=''/>
                <div className='RResetPasswordSuccess-Text'>
                    We have sent a password reset email to your address:
                </div>
                <div className='ResetPasswordSuccess-Email'>
                    { email }
                </div>
                <div className='ResetPasswordSuccess-SubInfo'>
                    If you can’t find the email, please check your junk folder.
                </div>
            </div>
        </div>
    )
}