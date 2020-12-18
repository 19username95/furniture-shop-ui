import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import {HamburgerSqueeze} from 'react-animated-burgers'
import Loader from '../LoaderComponent/LoaderComponent'
import { fetchCategoriesThunk } from '../../redux/thunks/categories'
import { CartPopUp } from "../index";
import useEventListener from "../../customHooks/useEvent";
import './NavigationComponent.scss'
import logoImage from '../../assets/images/logo.svg'
import searchIcon from '../../assets/icons/ic_search.svg'
import profileIcon from '../../assets/icons/ic_profile.svg'
import cartIcon from '../../assets/icons/ic_cart.svg'

function NavigationComponent({ categories, cartItems, fetchCategories, categoriesLoading }) {
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [showPopUp, setShowPopUp] = useState(false)
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)

    const handler = () => {
        if(window.innerWidth < 1024){
            setIsDesktop(false)
        } else {
            setIsDesktop(true)
            setIsBurgerActive(false)
        }
    };

    useEventListener('resize', handler);

    useEffect(handler, [])

    useEffect(() => {
        if (!categories.length && !categoriesLoading) {
            fetchCategories()
        }

        setCartItemsCount(cartItems.reduce((sum, item) => sum + item.count, 0))
    }, [cartItems])

    useEffect(() => {
        setIsDesktop(window.innerWidth > 1023)
    }, [])

    if (!categories || !categories.length) {
        return <Loader />
    }

    return (
    <div className='Navigation'>
        <div className='Navigation-Components'>
            <div className='Navigation-Container'>
                <div className='Navigation-BurgerContainer'>
                    <HamburgerSqueeze buttonColor="transparent"
                                      barColor="#121212"
                                      toggleButton={() => setIsBurgerActive(!isBurgerActive)}
                                      isActive={isBurgerActive}
                                      className='Navigation-BurgerButton'
                                      buttonWidth={'18'}
                    />
                </div>
                <NavLink className='Navigation-LogoLink'
                         to="/"
                         exact >
                    <img className='Navigation-Logo'
                         alt='morgan' src={logoImage}
                         draggable={false} />
                </NavLink>
                {
                    (isBurgerActive || isDesktop) ?
                        <ul className='Navigation-List Navigation-CategoriesList'>
                            { isBurgerActive && !isDesktop ? <div className='Navigation-ProductsTitle'>Products</div> : null }
                            {
                                categories.map(category => (
                                    <li className='Navigation-ListItem' key={category.id}>
                                        <NavLink className='Navigation-Link'
                                                 onClick={() => {
                                                     setIsBurgerActive(false)
                                                 }}
                                                 to={`/goods/${category.alias}`}
                                                 activeClassName="Navigation-Link_Active"
                                                 exact>
                                            {category.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul> :
                        null
                }
                <ul className='Navigation-List Navigation-MobileList'>
                    { isBurgerActive || isDesktop ?
                        <li className='Navigation-ListItem Navigation-ListItemSearch'>
                            <NavLink className='Navigation-Link'
                                     to="/search"
                                     activeClassName="Navigation-Link_Active"
                                     exact >
                                <img src={searchIcon} alt={'Search'}
                                     draggable={false}
                                     className='Navigation-LinkIcon' />
                            </NavLink>
                        </li>
                        : null
                    }
                    { !isBurgerActive || isDesktop ?
                        <li className='Navigation-ListItem'>
                            <NavLink className='Navigation-Link'
                                     to="/login"
                                     activeClassName="Navigation-Link_Active"
                                     exact >
                                <img src={profileIcon} alt={'Profile'}
                                     draggable={false} />
                            </NavLink>
                        </li>
                        : null
                    }
                    { !isBurgerActive || isDesktop ?
                        <li className='Navigation-ListItem'>
                            <NavLink className='Navigation-Link'
                                     to="/cart"
                                     activeClassName="Navigation-Link_Active"
                                     exact >
                                <img src={cartIcon} alt={'Cart'}
                                     draggable={false}
                                     onMouseEnter={ cartItemsCount > 0 ?
                                         () => setShowPopUp(true)
                                         : null} />
                                <div className='Navigation-CartCount'>
                                    {cartItemsCount ? cartItemsCount : '0'}
                                </div>
                            </NavLink>
                        </li>
                        : null
                    }

                </ul>
            </div>
        </div>
        { showPopUp ?
            <div className='Navigation-CartPopUpContainer'>
                <CartPopUp items={cartItems}
                           onMouseLeave={()=>setShowPopUp(false)} />
            </div>
            :null }
    </div>
    )
}

export default connect(state => ({
    categories: [...state.categories.list].sort((a,b) => {return a.menuOrder-b.menuOrder}),
    categoriesLoading: state.categories.loading,
    cartItems: Object.values(state.cart.items)
}), dispatch => ({
    fetchCategories: () => dispatch(fetchCategoriesThunk())
}))(NavigationComponent)