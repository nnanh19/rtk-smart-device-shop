import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/home/products/productsSlice'
import productReducer from '../features/products-detail/productdetailSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    product: productReducer
  },
});
