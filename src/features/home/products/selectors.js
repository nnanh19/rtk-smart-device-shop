export const listProductSelector = ({products}) => {
    let noMoreProducts = []
    let data = {}
    if(products.more){
        for (let index = 0; index < 7; index++) {
            noMoreProducts = [...noMoreProducts, products.products[index]]
        }
        data = {...products, products : noMoreProducts}
    }else{
        data = products
    }
    return  data
}
