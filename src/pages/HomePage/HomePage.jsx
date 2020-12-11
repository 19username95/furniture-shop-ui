import React, {useEffect} from "react";
import {connect} from "react-redux";

import './HomePage.scss'
import '../../global/Container.scss'
import Loader from "../../components/LoaderComponent/LoaderComponent";
import {fetchCategoriesThunk} from "../../redux/thunks/categories";
import {fetchProductsThunk} from "../../redux/thunks/products";

// temp images
import ExteriorCelling from "../../assets/images/temp/exterior-celling.svg"
import FloorLamps from "../../assets/images/temp/floor-lamps.svg"
import InteriorCelling from "../../assets/images/temp/interior-celling.svg"
import TableLamps from "../../assets/images/temp/table-lamps.svg"

function HomePage({ products, fetchProducts, categories, fetchCategories }) {
    useEffect(() => {
        if (!categories.length) {
            fetchCategories()
        }
        if(!products.length) {
            fetchProducts()
        }
    }, [])

    if (!categories || !categories.length || !products || !products.length) {
        return <Loader />
    }

    return (
        <div className='HomePage Container'>
            <section className='CategoriesView'>
                <div className='CategoriesView-Container'>
                    {
                        categories.map((category) => {
                            // temp images
                            let img = ''
                            switch (category.alias) {
                                case 'exterior-ceiling':
                                    img = ExteriorCelling
                                    break
                                case 'interior-ceiling':
                                    img = InteriorCelling
                                    break
                                case 'floor-lamps':
                                    img = FloorLamps
                                    break
                                case 'table-lamps':
                                    img = TableLamps
                                    break
                                default:
                                    break
                            }
                            //
                            return (
                                <div className='CategoriesView-Category'
                                     key={category.id}>
                                    <img className='CategoriesView-Image' alt=''
                                         src={img}
                                        // src={category.image}
                                    />
                                    <div className='CategoriesView-Title'>{category.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default connect(state => ({
    categories: state.categories.list,
    products: state.products.list
}), dispatch => ({
    fetchCategories: () => dispatch(fetchCategoriesThunk()),
    fetchProducts: () => dispatch(fetchProductsThunk())
}))(HomePage)