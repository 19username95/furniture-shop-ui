import React from 'react';
import { NavLink } from "react-router-dom";

import './NavigationComponent.scss'
import logo from '../../assets/images/logo.svg'
import searchIcon from '../../assets/icons/ic_search.svg'
import profileIcon from '../../assets/icons/ic_profile.svg'
import cartIcon from '../../assets/icons/ic_cart.svg'

function NavigationComponent() {
    return (
    <div className='Navigation'>
        <div className='Container Navigation-Container'>
            <NavLink className='Navigation-LogoLink'
                     to="/home"
                     exact={true} >
                <img alt='morgan' src={logo}/>
            </NavLink>
            <ul className='Navigation-List'>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/goods/interior"
                             activeClassName="Navigation-Link_Active"
                             exact={true} >
                        Interior ceiling
                    </NavLink>
                </li>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/goods/lamps"
                             activeClassName="Navigation-Link_Active"
                             exact={true} >
                        Floor lamps
                    </NavLink>
                </li>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/goods/ceiling"
                             activeClassName="Navigation-Link_Active"
                             exact={true} >
                        Exterior ceiling
                    </NavLink>
                </li>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/goods/table"
                             activeClassName="Navigation-Link_Active"
                             exact={true} >
                        Table lamps
                    </NavLink>
                </li>
            </ul>
            <ul className='Navigation-List'>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/search"
                             activeClassName="Navigation-Link_Active"
                             exact={true} >
                        <img src={searchIcon} alt={'Search'}/>
                    </NavLink>
                </li>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/profile"
                             activeClassName="Navigation-Link_Active"
                             exact={true}>
                        <img src={profileIcon} alt={'Profile'}/>
                    </NavLink>
                </li>
                <li className='Navigation-ListItem'>
                <NavLink className='Navigation-Link'
                         to="/cart"
                         activeClassName="Navigation-Link_Active"
                         exact={true} >
                    <img src={cartIcon} alt={'Cart'}/>
                </NavLink>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default NavigationComponent