import { createSelector } from "@reduxjs/toolkit";

// export const listProductSelector = ({products}) => {
//     let noMoreProducts = []
//     let data = {}
//     if(products.more){
//         for (let index = 0; index < 7; index++) {
//             noMoreProducts = [...noMoreProducts, products.products[index]]
//         }
//         data = {...products, products : noMoreProducts}
//     }else{
//         data = products
//     }
//     return  data
// }

export const productsSelector = ({products}) => products
export const searchProductsSelector = ({products}) => products.filters.search

export const listProductsSelector =createSelector(
    productsSelector,
    searchProductsSelector,
    (list,search) => {
        return list.products.filter((product) => {
            return (
                product.name.includes(search)
            )
        })
    }
)

