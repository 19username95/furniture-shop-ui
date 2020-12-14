import axios from "axios";

export const fetch = async ({ categoryId, sortType='newness', skip=0, limit=12 }) => {
    try {
        const { data: { products: allProducts } } = await axios.get('/products')

        // ToDo: move to back-end
        // Sort products
        let sortedProducts;
        switch (sortType) {
            case 'high-to-low':
                sortedProducts = allProducts.sort((a, b) => {return b.price - a.price})
                break
            case 'low-to-high':
                sortedProducts = allProducts.sort((a, b) => {return a.price - b.price})
                break
            case 'newness':
            default:
                sortedProducts = allProducts.sort((a, b) => {
                    return new Date(b.timeStamp) - new Date(a.timeStamp)
                })
                break
        }

        // Filter products
        const filteredProducts = sortedProducts.filter(product => !categoryId || product.categoryId === categoryId)

        // Paginate products
        const limitedProducts = filteredProducts.slice(skip, limit + skip)

        // Populate categories
        const { data: { categories } } = await axios.get('/categories')
        const products = limitedProducts.map(p => ({
            ...p,
            category: categories.find(c => c.id === p.categoryId)
        }))

        const count = filteredProducts.length

        return { products, count }
    } catch (error) {
        console.error('Fetch products error:', error)
    }
}
