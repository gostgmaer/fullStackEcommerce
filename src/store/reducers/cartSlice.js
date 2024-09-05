"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: window.localStorage.getItem("cartItems")
    ? JSON.parse(window.localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log("state.cartItems",state["cart"]);
      console.log("action",action);
      
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(product);
      
      if (product >= 0) {
        state.cartItems[product].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        console.log(tempProduct);
        state.cartItems.push(tempProduct);
      }
      console.log(state.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      console.log(JSON.parse(localStorage.getItem("cartItems")));
    },

    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else{
        state.cartItems.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            const nextCartItems = state.cartItems.filter(
              (item) => item.id !== cartItem.id
            );
  
            state.cartItems = nextCartItems;
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          return state;
        });
      }

     
    },
    incrementCart(state, action) {
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (product >= 0) {
        state.cartItems[product].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addByIncrement(state, action) {

      console.log(state.cartItems);
      
      console.log(action);
      
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (product >= 0) {
        state.cartItems[product].cartQuantity +=action.payload.cartQuantity;
      } else {
        const cartQuantity = action.payload.cartQuantity===1?1:action.payload.cartQuantity 
        const tempProduct = { ...action.payload.product,cartQuantity};
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          // console.log(cartItem);
          
          const { prices, cartQuantity } = cartItem;
          console.log(prices, cartQuantity);
          
          const itemTotal = prices.price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const { addToCart, removeFromCart,decreaseCart,incrementCart, getTotals,addByIncrement} = CartSlice.actions;

export const cartReducer = CartSlice.reducer;
