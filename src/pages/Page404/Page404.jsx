import React from "react";
import {NavLink} from "react-router-dom";

import './Page404.scss'
import '../../global/Container.scss'
import image404 from '../../assets/images/404.svg'
import WhiteButton from "../../components/WhiteButton/WhiteButton";

export default function Page404() {
    return (
        <div className='Page404'>
            <div className="Page404-Container Container">
                <img className='Page404-image404' alt='' src={image404}/>
                <div className='Page404-Sorry'>
                    Sorry, we can't find this page
                </div>
                <NavLink className='Page404-HomeButton' to="/home">
                    <WhiteButton title={'home page'}/>
                </NavLink>
            </div>
        </div>
    )
}