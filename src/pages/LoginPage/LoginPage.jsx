import React from "react";

import './LoginPage.scss'
import '../../global/Container.scss'
import { AuthTitle } from "../../components";
import { CustomInput } from "../../components";

export default function LoginPage() {
    return (
        <div className='LoginPage'>
            <div className='LoginPage-Container Container'>
                <AuthTitle>login</AuthTitle>
                <form>
                    <CustomInput label='Email'
                                 placeholder='Enter your email'
                                 labelHint={'test'}
                                 link='/404'
                                 linkText='testtest test testtesttest?'
                    />
                </form>
            </div>
        </div>
    )
}