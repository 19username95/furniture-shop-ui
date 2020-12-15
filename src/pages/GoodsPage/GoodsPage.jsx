import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import './GoodsPage.scss'
import '../../global/Container.scss'
import { fetchProductsThunk, loadMoreProductsThunk } from "../../redux/thunks/products";
import {Product, CustomSelect} from "../../components";

function GoodsPage({ products, fetchProducts, loadMoreProducts, categoryId, hasMore }) {
    const [sortType, setSortType] = useState('newness')

    useEffect(() => {
        fetchProducts({ categoryId })
    }, [categoryId])

    if (!products || !products.length) {
        return <div>There is no products in this category yet</div>
    }

    function onSort(type) {
        setSortType(type)
        fetchProducts({ categoryId, sortType: type })
    }

    function loadMore() {
        const skip = products.length
        const limit = 12

        loadMoreProducts({ categoryId, sortType, skip, limit })
    }

    const sortTypes = [
        { title: 'Newness', value: 'newness' },
        { title: 'Price high to low', value: 'high-to-low' },
        { title: 'Price low to high', value: 'low-to-high' }
    ]
    // const sortTypes = [ 'Newness', 'Price high to low', 'Price low to high' ]

    return (
        <div className='Products Container'>
            <div className='Products-Sort'>
                <span className='Products-SortTitle'>Sort by:</span>
                <CustomSelect options={sortTypes} onChange={onSort} />
            </div>
            <div className='Products-ProductGrid'>
                {
                    products
                        .map(product =>
                            <Product className='Products-Product' product={product} />
                        )
                }
            </div>
            { hasMore ? <div onClick={loadMore}>Load more</div> : null }
        </div>
    )
}

export default withRouter(connect((state, ownProps) => {
    // there is only 4 categories
    const category = state.categories.list.find(c => c.alias === ownProps.match.params.category)

    return {
        products: state.products.list,
        hasMore: state.products.hasMore,
        categoryId: category && category.id
    }
}, dispatch => ({
    fetchProducts: (options) => dispatch(fetchProductsThunk(options)),
    loadMoreProducts: (options) => dispatch(loadMoreProductsThunk(options))
}))(GoodsPage))