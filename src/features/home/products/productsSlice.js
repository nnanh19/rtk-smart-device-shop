import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../../api/productsApi";

const initialState = {
    products: [],
    status: 'idle',
    more: true,
}
export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const data = await getProducts()
        return data.data
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setMore: (state) => {
            state.more = !state.more
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProductsAsync.fulfilled , (state, action) =>  {
            state.products = action.payload
            state.status = 'idle';
        })
    }
})

export const  {setMore} = productSlice.actions

export default productSlice.reducer