
import CartServices from "@/helper/network/services/cartService";
import { notifyerror, notifyinfo, notifySuccess, notifywarning } from "@/utils/notify/notice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  status: 'idle',
  error:null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};


// export const saveCartToBackend = createAsyncThunk(
//   'cart/saveCartToBackend',
//   async (cartData, { rejectWithValue }) => {
//     try {
//       const response = await CartServices.addtoCart(cartData)
//       return response.data; // Returning response to be handled in extraReducers
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const saveCartToBackend = createAsyncThunk(
  'cart/saveCartToBackend',
  async (cartData, thunkAPI) => {
    try {
      const response = await CartServices.addtoCart(cartData)
      return response.data; // Returning the response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);


export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
  
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

 
      
      if (product >= 0) {
        state.cartItems[product].cartQuantity += 1;
        const cartData = {
          productId: action.payload.id,
          quantity: state.cartItems[product >= 0 ? product : state.cartItems.length - 1].cartQuantity,
        };
   
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
  
        state.cartItems.push(tempProduct);
      }

      notifySuccess("Product Add Success!")
      return state;
      
    },

    removeFromCart(state, action) {
      const prevLength = state.cartItems.length;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      if (state.cartItems.length < prevLength) {
        notifyerror("Product removed from cart!");
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex < 0) return;

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else {
        state.cartItems.splice(itemIndex, 1);
      }
      notifywarning("Cart quantity reduced!");
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
      notifyinfo("Cart Quantity Increase!")
     // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addByIncrement(state, action) {
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
      notifySuccess("Product add success!")
    //  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          
          const { prices, cartQuantity } = cartItem;
         
          
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

  extraReducers: (builder) => {
    builder
      .addCase(saveCartToBackend.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveCartToBackend.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(saveCartToBackend.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        // eslint-disable-next-line no-console
        if (process.env.NODE_ENV === 'development') console.error('Cart save failed:', action.payload);
      });
  },
});

export const { addToCart,emptyCart, removeFromCart,decreaseCart,incrementCart, getTotals,addByIncrement} = CartSlice.actions;

export const cartReducer = CartSlice.reducer;
