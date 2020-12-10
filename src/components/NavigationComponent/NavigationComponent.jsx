import React, { useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import './NavigationComponent.scss'
import '../../global/Container.scss'
import logo from '../../assets/images/logo.svg'
import searchIcon from '../../assets/icons/ic_search.svg'
import profileIcon from '../../assets/icons/ic_profile.svg'
import cartIcon from '../../assets/icons/ic_cart.svg'
import Loader from '../LoaderComponent/LoaderComponent'
import { fetchCategoriesThunk } from '../../redux/thunks/categories'

function NavigationComponent({ categories, fetchCategories }) {
    useEffect(() => fetchCategories(), [fetchCategories])

    if (!categories || !categories.length) {
        return <Loader />
    }
    else {
        categories.sort((a,b) => a.menuOrder > b.menuOrder ? 1 : -1)
    }

    return (
    <div className='Navigation'>
        <div className='Container Navigation-Container'>
            <NavLink className='Navigation-LogoLink'
                     to="/"
                     exact >
                <img alt='morgan' src={logo}/>
            </NavLink>
            <ul className='Navigation-List'>
                {
                    categories.map(category => (
                        <li className='Navigation-ListItem' key={category.id}>
                            <Link className='Navigation-Link'
                                     to={`/goods/${category.alias}`}
                                     activeClassName="Navigation-Link_Active"
                                     exact >
                                {category.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <ul className='Navigation-List'>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/search"
                             activeClassName="Navigation-Link_Active"
                             exact >
                        <img src={searchIcon} alt={'Search'}/>
                    </NavLink>
                </li>
                <li className='Navigation-ListItem'>
                    <NavLink className='Navigation-Link'
                             to="/profile"
                             activeClassName="Navigation-Link_Active"
                             exact >
                        <img src={profileIcon} alt={'Profile'}/>
                    </NavLink>
                </li>
                <li className='Navigation-ListItem'>
                <NavLink className='Navigation-Link'
                         to="/cart"
                         activeClassName="Navigation-Link_Active"
                         exact >
                    <img src={cartIcon} alt={'Cart'}/>
                </NavLink>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default connect(state => ({
    categories: state.categories.list
}), dispatch => ({
    fetchCategories: () => dispatch(fetchCategoriesThunk())
}))(NavigationComponent)