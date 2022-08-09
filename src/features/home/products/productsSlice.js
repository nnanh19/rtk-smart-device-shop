import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../../api/productsApi";

const initialState = {
    products: [],
    status: 'idle',
    more: true,
    filters: {
        categoryId: null,
        search: ''
    }
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
        setSearchText: (state, action) => {
            state.filters.search = action.payload
        }
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

export const  {setMore, setSearchText} = productSlice.actions

export default productSlice.reducer