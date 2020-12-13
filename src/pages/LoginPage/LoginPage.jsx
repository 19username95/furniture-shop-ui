import React, {useState} from "react";
import {CreateAccount, Login} from "../../components";

export default function LoginPage() {
    const [mode, setMode] = useState('sign-in')

    switch(mode) {
        // case "profile":

        case "sign-up":
            return <CreateAccount goToSignIn={() => setMode('sign-in')} />
        case "sign-in":
        default:
            return <Login goToSignUp={() => setMode('sign-up')} />

    }
}
