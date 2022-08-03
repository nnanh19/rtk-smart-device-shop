import instance from "../../../api/instance"

const getProducts = () => {
    const url = `products`
    return instance.get(url)
}
export {getProducts}