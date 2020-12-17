import React from "react"
import googleIcon from "../../assets/icons/ic_google.svg"
import facebookIcon from "../../assets/icons/ic_facebook.svg"
import "./ThirdPartyLoginSectionComponent.scss"

export default function ThirdPartyLoginSectionComponent() {
    return (
        <div>
            <div className='Separator'>or</div>
            <div className='ThirdPartyLoginButtons'>
                <button className='ThirdPartyLoginButtons-Button'>
                    <img className='ThirdPartyLoginButtons-ButtonImage'
                         alt='G' src={googleIcon}
                         draggable={false} />
                    <span className='ThirdPartyLoginButtons-ButtonText'>With Google</span>
                </button>
                <button className='ThirdPartyLoginButtons-Button'>
                    <img className='ThirdPartyLoginButtons-ButtonImage'
                         alt='f' src={facebookIcon}
                         draggable={false} />
                    <span className='ThirdPartyLoginButtons-ButtonText'>With Facebook</span>
                </button>
            </div>
        </div>
    )
}