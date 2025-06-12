// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import formReducer from "./formSlice";
import formTabReducer from "./formTabSlice";
import cartReducer from "./eCommerceSlice"

export const store = configureStore({ reducer: { counter: counterReducer , form  : formReducer, tabForm : formTabReducer, cart: cartReducer} });
