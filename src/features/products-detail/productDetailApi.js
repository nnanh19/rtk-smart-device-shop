import instance from "../../api/instance";

const getProduct = (id) => {
    const url = `products/${id}`
    return instance.get(url)
}

const getProductByCategoryId = (id) => {
    const url = `products?categoryId=${id}`
    return instance.get(url)
}

export {getProduct, getProductByCategoryId}