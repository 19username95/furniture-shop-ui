import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './GoodsPage.scss'
import { fetchProductsThunk, loadMoreProductsThunk } from "../../redux/thunks/products";
import {Product} from "../../components";

function GoodsPage({ products, fetchProducts, loadMoreProducts, categoryId }) {
    const [sortType, setSortType] = useState('newness')

    useEffect(() => {
        if(!products.length) {
            fetchProducts({})
        }
    }, [])
    if (!products || !products.length) {
        return <div>There is no products in this category yet</div>
    }

    function onSort(e) {
        const type = e.target.value
        setSortType(type)
        fetchProducts({sortType: type})
    }

    function loadMore() {
        const skip = products.length
        const limit = 12

        loadMoreProducts({ sortType, skip, limit })
    }

    return (
        <div className='Products'>
            <div className='Products-Sort'>
                Sort by:
                <select onChange={onSort}>
                    <option value='newness' defaultChecked>Newness</option>
                    <option value='high-to-low'>Price high to low</option>
                    <option value='low-to-high'>Price low to high</option>
                </select>
            </div>
            <div className='Products-ProductGrid'>
                {
                    products
                        .filter(product => categoryId?product.categoryId === categoryId:product)
                        .map(product =>
                            <Product  className='Products-Product' product={product} />
                        )
                }
            </div>
            <div onClick={loadMore}>Load more</div>
        </div>
    )
}

export default withRouter(connect((state, ownProps) => {
    // there is only 4 categories
    const category = state.categories.list.find(c => c.alias === ownProps.match.params.category)

    return {
        products: state.products.list,
        categoryId: category && category.id
    }
}, dispatch => ({
    fetchProducts: (options) => dispatch(fetchProductsThunk(options)),
    loadMoreProducts: (options) => dispatch(loadMoreProductsThunk(options))
}))(GoodsPage))