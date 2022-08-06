import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/home/products/productsSlice'
import productReducer from '../features/products-detail/productdetailSlice'
import cartReducer from '../features/cart/cartSlice'
import categoriesReducer from '../features/home/categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    categories: categoriesReducer
  },
});
