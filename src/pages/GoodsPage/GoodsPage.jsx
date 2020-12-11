import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './GoodsPage.scss'
import { fetchProductsThunk } from "../../redux/thunks/products";

function GoodsPage({ products, fetchProducts, categoryId }) {
    useEffect(() => {
        if(!products.length) {
            fetchProducts()
        }
    }, [])
    if (!products || !products.length || !categoryId) {
        return <div>There is no products in this category yet</div>
    }

    return (
        <div>
            {
                products
                    .filter(product => product.categoryId === categoryId)
                    .map(product =>
                        <div>
                            {product.name}
                        </div>
                    )
            }
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