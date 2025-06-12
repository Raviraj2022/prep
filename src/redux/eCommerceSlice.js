import { createSlice } from "@reduxjs/toolkit";


const eCommerceSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        orderSuccess: false,
    },
    reducers:{
        addToCart:(state, action)=>{
            state.cart.push(action.payload);
        },
        removeToCart:(state, action)=>{
            state.cart = state.cart.filter(item=>item.id !== action.payload);
        },
        clearCart : (state)=>{
            state.cart= [];
        },
        placeOrder:(state)=>{
            if(state.cart.length>0){
                state.orderSuccess=true;
                state.cart = [];
            }
        },
        resetOrderSuccess: (state)=>{
            state.orderSuccess = false;
        }

    },

});

export const {addToCart, removeToCart, clearCart, placeOrder, resetOrderSuccess} = eCommerceSlice.actions;
export default eCommerceSlice.reducer;