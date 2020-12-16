import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import Loader from '../LoaderComponent/LoaderComponent'
import { fetchCategoriesThunk } from '../../redux/thunks/categories'
import {CartPopUp} from "../index";
import './NavigationComponent.scss'
import logoImage from '../../assets/images/logo.svg'
import searchIcon from '../../assets/icons/ic_search.svg'
import profileIcon from '../../assets/icons/ic_profile.svg'
import cartIcon from '../../assets/icons/ic_cart.svg'

function NavigationComponent({ categories, cartItems, fetchCategories, categoriesLoading }) {
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [showPopUp, setShowPopUp] = useState(false)

    useEffect(() => {
        if (!categories.length && !categoriesLoading) {
            fetchCategories()
        }
        setCartItemsCount(cartItems.reduce((sum, item) => sum + item.count, 0))
    }, [cartItems])

    if (!categories || !categories.length) {
        return <Loader />
    }

    return (
    <div className='Navigation'>
        <div className='Navigation-Components'>
            <div className='Navigation-Container'>
                <NavLink className='Navigation-LogoLink'
                         to="/"
                         exact >
                    <img alt='morgan' src={logoImage}/>
                </NavLink>
                <ul className='Navigation-List'>
                    {
                        categories.map(category => (
                            <li className='Navigation-ListItem' key={category.id}>
                                <NavLink className='Navigation-Link'
                                         to={`/goods/${category.alias}`}
                                         activeClassName="Navigation-Link_Active"
                                         exact >
                                    {category.title}
                                </NavLink>
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
                                 to="/login"
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
                            <img src={cartIcon} alt={'Cart'}
                                 onMouseEnter={ cartItemsCount > 0 ?
                                     () => setShowPopUp(true)
                                     : null} />
                            <div className='Navigation-CartCount'>
                                {cartItemsCount ? cartItemsCount : '0'}
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        { showPopUp ?
            <div className='Navigation-CartPopUpContainer'>
                <CartPopUp items={cartItems}
                           closePopUp={() => setShowPopUp(false)}
                           onMouseLeave={()=>setShowPopUp(false)} />
            </div>
            :null }
    </div>
    )
}

export default connect(state => ({
    categories: state.categories.list,
    categoriesLoading: state.categories.loading,
    cartItems: Object.values(state.cart.items)
}), dispatch => ({
    fetchCategories: () => dispatch(fetchCategoriesThunk())
}))(NavigationComponent)