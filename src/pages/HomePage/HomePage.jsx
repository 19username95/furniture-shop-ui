import React, {useEffect} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Loader from "../../components/LoaderComponent/LoaderComponent";
import {fetchCategoriesThunk} from "../../redux/thunks/categories";
import GoodsPage from "../GoodsPage/GoodsPage";
import {API_URL} from "../../global/constants";
import './HomePage.scss'
import '../../global/Container.scss'

function HomePage({ products, fetchProducts, categories, fetchCategories }) {
    useEffect(() => {
        if (!categories.length) {
            fetchCategories()
        }
    }, [])

    if (!categories || !categories.length) {
        return <Loader />
    }

    return (
        <div className='HomePage Container'>
            <section className='CategoriesView'>
                <div className='CategoriesView-Container'>
                    {
                        categories.map((category) => {
                            return (
                                <div className='CategoriesView-Category'
                                     key={category.id}>
                                    <NavLink to={'/goods/' + category.alias} className='CategoriesView-ImageLink'>
                                        <img className='CategoriesView-Image'
                                             draggable={false} alt=''
                                             src={API_URL + category.image}
                                        />
                                    </NavLink>
                                    <div className='CategoriesView-Title'>{category.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='ProductsView'>
                <div className='ProductsView-Wrapper'>
                    <GoodsPage />
                </div>
            </section>
        </div>
    )
}

export default connect(state => ({
    categories: state.categories.list
}), dispatch => ({
    fetchCategories: () => dispatch(fetchCategoriesThunk())
}))(HomePage)