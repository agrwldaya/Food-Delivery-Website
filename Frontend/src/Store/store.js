import {configureStore} from "@reduxjs/toolkit"
import isLogin from "./loginSlice";
import CartItem from "./cartSlice";


const food_store = configureStore({
    reducer:{
    isLogin:isLogin.reducer,
    CartItem: CartItem.reducer,
    }
})

export default food_store;