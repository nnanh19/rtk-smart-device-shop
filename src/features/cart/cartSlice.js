import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCart: [],
  total: 0,
  status: 'idle'
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const cartIndex = state.myCart.findIndex(item => item.id === action.payload.id)
        console.log(cartIndex);
        if(cartIndex >= 0){
          state.myCart[cartIndex].quantity += 1
        }else{
          const newCart = {...action.payload, quantity: 1}
          state.myCart.push(newCart)
        }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
