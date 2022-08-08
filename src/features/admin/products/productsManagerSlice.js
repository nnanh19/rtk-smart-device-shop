import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProduct, getProducts, updateFieldProduct, updateProduct } from "../../../api/productsApi";
import { getProduct } from "../../products-detail/productDetailApi";

const initialState = {
    products: [],
    product: {},
    status: 'idle',
    more: true,
    filters: {
        categoryId: null,
        search: ''
    }
    
}
export const fetchProductsManagerAsync = createAsyncThunk(
    'productsManager/fetchProducts',
    async () => {
        const data = await getProducts()
        return data.data
    }
)
export const fetchProductManagerAsync = createAsyncThunk(
    'productsManager/fetchProduct',
    async (id) => {
        const data = await getProduct(id)
        return data.data
    }
)
export const fetchUpdateFieldStatusProductAsync = createAsyncThunk(
    'productsManager/fetchUpdateFieldStatus',
    async (product) => {
        const data = await updateFieldProduct(product)
        return data.data
    }
)
export const fetchCreateProductAsync = createAsyncThunk(
    'productsManager/fetchCreateProduct',
    async (product) => {
        const data = await createProduct(product)
        return data.data
    }
)
export const fetchUpdateProductAsync = createAsyncThunk(
    'productsManager/fetchUpdateProduct',
    async (product) => {
        const data = await updateProduct(product)
        return data.data
    }
)

const productsManagerSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setMore: (state) => {
            state.more = !state.more
        },
        setCategoryId: (state, action) =>{
            state.filters.categoryId = action.payload
        },
        setSearch: (state, action) =>{
            state.filters.search = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsManagerAsync.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchProductsManagerAsync.fulfilled , (state, action) =>  {
            state.products = action.payload
            state.status = 'idle';
        })
        .addCase(fetchUpdateFieldStatusProductAsync.pending, (state,action) => {
            state.status = 'loading'
        })
        .addCase(fetchUpdateFieldStatusProductAsync.fulfilled, (state,action) => {
            state.status = 'idle'
            const products = state.products.filter(item => item.id !== action.payload.id)
            const newProducts = [...products, action.payload]
            state.products = newProducts  
        })
        .addCase(fetchCreateProductAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCreateProductAsync.fulfilled, (state) => {
            state.status = 'idle'
        })
        .addCase(fetchUpdateProductAsync.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUpdateProductAsync.fulfilled, (state) => {
            state.status = 'idle'
        })
        .addCase(fetchProductManagerAsync.pending, (state) =>{
            state.status = 'loading'
        })
        .addCase(fetchProductManagerAsync.fulfilled, (state, action)=>{
            state.product = action.payload
        })
    }
})

export const  {setMore, setCategoryId, setSearch} = productsManagerSlice.actions

export default productsManagerSlice.reducer