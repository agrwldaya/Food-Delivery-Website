import { createSlice, current } from "@reduxjs/toolkit";

const CartItem = createSlice({
    name: "cartItem",
    initialState: {
        items: [],
        subtotal: 0,
    },
    
    reducers: {
        addCartItem: (state, action) => {
            const item = { ...action.payload};
            state.items.push(item);
            state.subtotal += action.payload.total;
        },


        // quantityhandle: (state, action) => {
         
        //     const { id } = action.payload;
        //     const item = state.items.find(item => item.id === id);
        //     if (item) {
        //         item.quantity += 1;
        //         item.total += item.price;
        //         state.subtotal += item.price;
        //     }
        // },

        // removeQuantity: (state, action) => {
        //     const { id } = action.payload;
        //     const item = state.items.find(item => item.id === id);
        //     if (item && item.quantity > 1) {
        //         item.quantity -= 1;
        //         item.total -= item.price;
        //         state.subtotal -= item.price;
        //     } else if (item && item.quantity === 1) {
        //         state.items = state.items.filter(item => item.id !== id);
        //         state.subtotal -= item.price;
        //     }
        // },

        // removeItem:(state,action)=>{
        //     const item = state.items.find(item => item.id === action.payload);
             
        //     return {
        //       ...state,
        //       items: state.items.filter((item) => item.id !== action.payload),
        //       subtotal:state.subtotal - item.total
        //   };
        //   },
    },
});

export default CartItem;
export const CartActions = CartItem.actions;
