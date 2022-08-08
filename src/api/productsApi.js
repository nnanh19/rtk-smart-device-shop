import instance from "./instance"

const getProducts = () => {
    const url = `products`
    return instance.get(url)
}
const getProduct = (id) => {
    const url = `products/${id}`
    return instance.get(url)
}
const createProduct = (data) => {
    const url = `products`
    return instance.post(url,data)
}
const updateProduct = (data) => {
    const url = `products/${data.id}`
    return instance.put(url,data)
}

const updateFieldProduct = (product) => {
    const url = `products/${product.id}`
    return instance.patch(url,product)
}

export {getProducts, updateFieldProduct, createProduct,getProduct, updateProduct}
