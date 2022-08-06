import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleMobile: false,
    toggleLaptop: false,
    toggleTablet: false,
    toggleHeadphone: false,
    toggleWatch: false,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        toggleMobile: (state) => {
            state.toggleMobile = !state.toggleMobile
        },
        toggleLaptop: (state) => {
            state.toggleLaptop = !state.toggleLaptop
        },
        toggleTablet: (state) => {
            state.toggleTablet = !state.toggleTablet
        },
        toggleHeadphone: (state) => {
            state.toggleHeadphone = !state.toggleHeadphone
        },
        toggleWatch: (state) => {
            state.toggleWatch = !state.toggleWatch
        }
    }
})

export const {toggleMobile, toggleLaptop, toggleTablet, toggleHeadphone, toggleWatch  } = categoriesSlice.actions
export default categoriesSlice.reducer