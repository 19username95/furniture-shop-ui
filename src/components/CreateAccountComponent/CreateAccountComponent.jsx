import React, {useState} from "react";

import './CreateAccountComponent.scss'
import '../../global/Container.scss'
import {
    AuthTitle,
    BlackButton,
    CustomInput
} from "../index";

export default function CreateAccountComponent({ goToSignIn }) {
    return (
        <div>
            <AuthTitle>CREATE AN ACCOUNT</AuthTitle>
            <form>

            </form>
            <BlackButton title='CREATE AN ACCOUNT'
                         link='/' />
            <div>
                <div>Have an account?</div>
                <div onClick={goToSignIn}>Login</div>
            </div>
        </div>
    )
}