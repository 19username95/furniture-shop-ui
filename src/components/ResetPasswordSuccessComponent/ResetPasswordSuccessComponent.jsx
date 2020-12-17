import React from "react"
import { Title } from "../index"
import './ResetPasswordSuccessComponent.scss'
import '../../global/Container.scss'
import birdImage from '../../assets/images/paper_bird.svg'

export default function ResetPasswordSuccessComponent({ email }) {
    return (
        <div className='ResetPasswordSuccessWrapper'>
            <div className='ResetPasswordSuccess Container'>
                <Title>YOUR LINK HAS BEEN SENT</Title>
                <div className='ResetPasswordSuccess-Container'>
                    <img className='ResetPasswordSuccess-Image'
                         alt='' src={birdImage}
                         draggable={false} />
                    <div className='ResetPasswordSuccess-Text'>
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
        </div>
    )
}