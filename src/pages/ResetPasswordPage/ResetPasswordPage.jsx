import React, {useState} from "react";
import { ResetPassword, ResetPasswordSuccess } from "../../components";

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const submit = (email) => {
        setEmail(email)
        setSuccess(true)
    }

    return (
        <div className='ResetPasswordPage'>
            {!success ? <ResetPassword onSubmit={submit} /> :
            <ResetPasswordSuccess email={email} /> }
        </div>
    )
}