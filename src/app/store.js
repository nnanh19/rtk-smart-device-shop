import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/home/products/productsSlice'
import productReducer from '../features/products-detail/productdetailSlice'
import productsManagerReducer from '../features/admin/products/productsManagerSlice';
import cartReducer from '../features/cart/cartSlice'
import categoriesReducer from '../features/home/categories/categoriesSlice'
import categoriesManagerReducer from '../features/admin/categories/categoriesManagerSlice';
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    productsManager: productsManagerReducer,
    product: productReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    categoriesManager: categoriesManagerReducer,
    user: usersReducer
  },
});
