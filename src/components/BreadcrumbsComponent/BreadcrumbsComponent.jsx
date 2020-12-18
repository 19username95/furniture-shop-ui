import {NavLink} from "react-router-dom"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import React from "react"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './BreadcrumbsComponent.scss'

export default function BreadcrumbsComponent({currentCategoryTitle, prevLinks}) {
    return currentCategoryTitle ?
        (
            <div className='BreadcrumbsContainer'>
                <Breadcrumbs separator={<NavigateNextIcon
                    fontSize='small'
                    className='Breadcrumbs' />}>
                    {
                        prevLinks.map((prevLink) => (
                            <NavLink key={prevLink.link} to={'/' + prevLink.link}>
                                {prevLink.title}
                            </NavLink>
                        ))
                    }
                    <span>{currentCategoryTitle}</span>
                </Breadcrumbs>
            </div>
        )
    : null
}
