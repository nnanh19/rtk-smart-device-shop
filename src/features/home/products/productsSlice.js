import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./productsApi";

const initialState = {
    products: [],
    status: 'idle'
}
export const fetchProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const data= await getProducts()
        return data.data
    }
)

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
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


export default productSlice.reducer