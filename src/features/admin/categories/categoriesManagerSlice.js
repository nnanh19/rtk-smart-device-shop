import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../../api/categoriesApi";

const initialState = {
    status: 'idle',
    categories: []
}

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const data = await getCategories()
        return data.data
    }
) 

const categoriesManagerSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state,action) => {
            state.categories = action.payload
            state.status = 'idle'
        })
    }
})

export default categoriesManagerSlice.reducer