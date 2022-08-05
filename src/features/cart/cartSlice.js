import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCart: [],
  temporaryTotal: 0,
  total: 0,
  status: 'idle'
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const cartIndex = state.myCart.findIndex(item => item.id === action.payload.id)
        if(cartIndex >= 0){
          state.myCart[cartIndex].quantity += 1
        }else{
          const newCart = {...action.payload, quantity: 1}
          state.myCart.push(newCart)
        }
        state.temporaryTotal = state.myCart.reduce((init, prevPrice) => {
           const temporaryTotal = init + prevPrice.price
           return temporaryTotal
        },0)
    },
    removeCart: (state, action) =>{
      state.myCart = state.myCart.filter(item => item.id !== action.payload.id)
      state.temporaryTotal = state.myCart.reduce((init, prevPrice) => {
        const temporaryTotal = init + (prevPrice.price * prevPrice.quantity)
        return temporaryTotal
     },0)
    },

    increaseCart: (state,action) => {
      const cartIndex = state.myCart.findIndex(item => item.id === action.payload.id)
      console.log(cartIndex);
      if(cartIndex >= 0){
        state.myCart[cartIndex].quantity++
      }else{
        state.myCart[cartIndex].quantity--
      }
      state.temporaryTotal = state.myCart.reduce((init, prevPrice) => {
         const temporaryTotal = init + (prevPrice.price * prevPrice.quantity)
         return temporaryTotal
      },0)
      state.myCart = state.myCart.filter(item => item.quantity !== 0)
    },
    decreaseCart: (state,action) => {
      const cartIndex = state.myCart.findIndex(item => item.id === action.payload.id)
      console.log(cartIndex);
      if(cartIndex >= 0){
        state.myCart[cartIndex].quantity--
      }else{
        state.myCart[cartIndex].quantity++
      }
      state.temporaryTotal = state.myCart.reduce((init, prevPrice) => {
         const temporaryTotal = init + (prevPrice.price * prevPrice.quantity)
         return temporaryTotal
      },0)
      state.myCart = state.myCart.filter(item => item.quantity !== 0)
    }
  },
});

export const { addToCart, removeCart, increaseCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
