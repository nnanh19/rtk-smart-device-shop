import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "./apiUsers";

const initialState = {
    statusSignup: 'idle',
    statusSignin: 'idle',
    user: {}
}

export const fetchSignupAsync = createAsyncThunk(
    'user/signup',
    async (user) => {
        const data = await signUp(user)
        return data.data
    }
)
export const fetchSigninAsync = createAsyncThunk(
    'user/signin',
    async (user) => {
        const data = await signIn(user)
        return data.data
    }
)

const signupSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeStatusSignIn: (state) =>{
            state.statusSignin = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSignupAsync.fulfilled , (state, action) => {
            state.statusSignup = 'success'
        })
        .addCase(fetchSigninAsync.fulfilled, (state,action) => {
            state.statusSignin = 'success'
            state.user = action.payload.user
        })
        .addCase(fetchSigninAsync.rejected, (state) => {
            state.statusSignin = 'failure'
        })
    }
})
export const {changeStatusSignIn} = signupSlice.actions
export default signupSlice.reducer
