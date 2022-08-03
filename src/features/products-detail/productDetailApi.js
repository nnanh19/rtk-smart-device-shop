import instance from "../../api/instance";

const getProduct = (id) => {
    const url = `products/${id}`
    return instance.get(url)
}

export {getProduct}