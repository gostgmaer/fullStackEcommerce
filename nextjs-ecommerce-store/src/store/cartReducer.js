// import { combineReducers } from "redux";
// import { CartReducer } from "./Cart/Reducer";

// const rootReducer = combineReducers({
//     cart:CartReducer
// })

// export default rootReducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishList: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
        item["subtotal"] = item.quantity * item.price;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    updateCart: (state, action) => {
      // state.cartItems = state.cartItems.map((p) => {
      //     if (p.id === action.payload.id) {
      //         if (action.payload.key === "quantity") {
      //             p.attributes.price =
      //                 p.oneQuantityPrice * action.payload.val;
      //         }
      //         return { ...p, [action.payload.key]: action.payload.val };
      //     }
      //     return p;
      // });
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity > 1) {
        item.quantity -= 1;
        item["subtotal"] = item.quantity * item.price;
      } else {
        state.cartItems = state.cartItems.filter(
          (data) => data.id !== action.payload.id
        );
      }
    },
    removefromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.cartItems = [];
    },
    addToWishlist: (state, action) => {
      const item = state.wishList.find((item) => item.id === action.payload.id);
      state.wishList.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
    resetWishList: (state, action) => {
      state.wishList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removefromCart,
  resetCart,
  updateCart,
  addToWishlist,
  removeFromWishlist,
  resetWishList,
} = cartSlice.actions;

export default cartSlice.reducer;
