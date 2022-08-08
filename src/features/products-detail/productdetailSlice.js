import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct, getProductByCategoryId } from "./productDetailApi";

const initialState = {
    loading: 'idle',
    product: {},
    sameProducts: []
}
export const fetchProductDetailAsync = createAsyncThunk(
    'productDetail/fetchProductDetail',
    async (id) => {
        const data = await getProduct(id)
        return data.data
    } 
)
export const fetchSameProductsAsync = createAsyncThunk(
    'productDetail/fetchSameProduct',
    async (id) => {
        const data = await getProductByCategoryId(id)
        return data.data
    } 
)

const productDetailSlice = createSlice({ 
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
        .addCase(fetchSameProductsAsync.fulfilled, (state, action) => {
            state.sameProducts = action.payload
        })
    }
})

export default productDetailSlice.reducer
