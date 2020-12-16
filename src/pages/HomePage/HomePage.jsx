import React, {useEffect} from "react";
import {connect} from "react-redux";

import './HomePage.scss'
import '../../global/Container.scss'
import Loader from "../../components/LoaderComponent/LoaderComponent";
import {fetchCategoriesThunk} from "../../redux/thunks/categories";
import GoodsPage from "../GoodsPage/GoodsPage";
import {API_URL} from "../../global/constants";

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
                                    <img className='CategoriesView-Image'
                                         draggable={false} alt=''
                                         src={API_URL + category.image}
                                    />
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