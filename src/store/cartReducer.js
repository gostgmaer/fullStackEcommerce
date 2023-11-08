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
        (item) => item.product["id"] === action.payload.product["id"]
      );
      if (item) {
        item.quantity += action.payload.quantity;
        item["subtotal"] = item.quantity * item.product["price"];
      } else {
        state.cartItems.push({
          ["quantity"]: action.payload.quantity,
          ["subtotal"]:
            action.payload.quantity * action.payload.product["price"],
          product: action.payload.product,
        });
      }
    },

    updateCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.product["id"] === action.payload["id"]
      );
      if (item.quantity > 1) {
        item.quantity -= 1;
        item["subtotal"] = item.quantity * item.product.price;
      } else {
        state.cartItems = state.cartItems.filter(
          (data) => data.product["id"] !== action.payload["id"]
        );
      }
    },
    removefromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product.id !== action.payload
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
