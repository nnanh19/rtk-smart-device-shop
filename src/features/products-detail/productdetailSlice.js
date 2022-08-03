import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productDetailApi";

export const initialState = {
    loading: 'idle',
    product: {}
}
console.log(initialState);
export const fetchProductDetailAsync = createAsyncThunk(
    'productDetail/fetchProductDetail',
    async (id) => {
        const data = await getProduct(id)
        return data.data
    } 
)

export const productDetailSlice = createSlice({ 
    name: 'productsDetail',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductDetailAsync.pending, (state) => {
            state.loading = 'idle'
        })
        .addCase(fetchProductDetailAsync.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})

export default productDetailSlice.reducer
