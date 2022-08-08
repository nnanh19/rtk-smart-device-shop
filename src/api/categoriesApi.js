import instance from "./instance"

const getCategories = () => {
    const api = 'categories'
    return instance.get(api)
}

export {getCategories}