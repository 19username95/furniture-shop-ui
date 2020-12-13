import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './GoodsPage.scss'
import { fetchProductsThunk } from "../../redux/thunks/products";
import {Product} from "../../components";

function GoodsPage({ products, fetchProducts, categoryId }) {
    useEffect(() => {
        if(!products.length) {
            fetchProducts()
        }
    }, [])
    if (!products || !products.length) {
        return <div>There is no products in this category yet</div>
    }

    return (
        <div className='Products'>
            <div className='Products-Sort'>Sort</div>
            <div className='Products-ProductGrid'>
                {
                    products
                        .filter(product => categoryId?product.categoryId === categoryId:product)
                        .map(product =>
                            <Product  className='Products-Product' product={product} />
                        )
                }
            </div>
        </div>
    )
}

export default withRouter(connect((state, ownProps) => {
    const category = state.categories.list.find(c => c.alias === ownProps.match.params.category)

    return {
        products: state.products.list,
        categoryId: category && category.id
    }
}, dispatch => ({
    fetchProducts: () => dispatch(fetchProductsThunk())
}))(GoodsPage))