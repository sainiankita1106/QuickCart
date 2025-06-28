import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{cartItems:[],},
    reducers:{
        addToCart:(state,action)=>{
            if(!state.cartItems.includes(action.payload)){
                state.cartItems.push(action.payload);
            }
        },
        removeFromCart:(state,action)=>{
            state.cartItems= state.cartItems.filter(id=>id !==action.payload);
        },
    },
});
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;