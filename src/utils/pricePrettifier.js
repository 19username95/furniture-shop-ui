export const pricePrettifier = (value) => {
    return '£' + (+value).toFixed(2)
}