
import CartServices from "@/helper/network/services/cartService";
import { notifyerror, notifyinfo, notifySuccess, notifywarning } from "@/utils/notify/notice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  status: 'idle',
  error:null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  cartTaxAmount: 0,
};

const getCartItemId = (item) => item?.id || item?._id;

const getCartItemPrice = (item) => Number(item?.price ?? item?.prices?.price ?? 0);

const getCartItemStockLimit = (item) => Number(item?.stock ?? item?.quantity ?? 999);


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
      return response; // fetch client already returns parsed data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Cart save failed');
    }
  }
);


export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action) {
      const payloadId = getCartItemId(action.payload);

      const product = state.cartItems.findIndex(
        (item) => getCartItemId(item) === payloadId
      );

      const stockLimit = getCartItemStockLimit(action.payload);

      if (product >= 0) {
        if (state.cartItems[product].cartQuantity >= stockLimit) {
          notifyerror("Maximum available stock reached");
          return state;
        }
        state.cartItems[product].cartQuantity += 1;
        const cartData = {
          productId: payloadId,
          quantity: state.cartItems[product].cartQuantity,
        };

      } else {
        if (stockLimit < 1) {
          notifyerror("Sorry, this item is out of stock!");
          return state;
        }
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      notifySuccess("Product Add Success!")
      return state;

    },

    removeFromCart(state, action) {
      const payloadId = getCartItemId(action.payload);
      const prevLength = state.cartItems.length;
      state.cartItems = state.cartItems.filter(
        (item) => getCartItemId(item) !== payloadId
      );
      if (state.cartItems.length < prevLength) {
        notifyerror("Product removed from cart!");
      }
    },
    decreaseCart(state, action) {
      const payloadId = getCartItemId(action.payload);
      const itemIndex = state.cartItems.findIndex(
        (item) => getCartItemId(item) === payloadId
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
      const payloadId = getCartItemId(action.payload);
      const product = state.cartItems.findIndex(
        (item) => getCartItemId(item) === payloadId
      );
      const stockLimit = getCartItemStockLimit(action.payload);

      if (product >= 0) {
        if (state.cartItems[product].cartQuantity >= stockLimit) {
          notifyerror("Maximum available stock reached");
          return state;
        }
        state.cartItems[product].cartQuantity += 1;
      } else {
        if (stockLimit < 1) {
          notifyerror("Sorry, this item is out of stock!");
          return state;
        }
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);

      }
      notifyinfo("Cart Quantity Increase!")
     // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addByIncrement(state, action) {
      const payloadId = getCartItemId(action.payload.product);
      const product = state.cartItems.findIndex(
        (item) => getCartItemId(item) === payloadId
      );
      const stockLimit = getCartItemStockLimit(action.payload.product);
      const requestedQuantity = Number(action.payload.cartQuantity) > 0 ? Number(action.payload.cartQuantity) : 1;

      if (product >= 0) {
        if (state.cartItems[product].cartQuantity + requestedQuantity > stockLimit) {
          notifyerror(`Cannot add more. Only ${stockLimit} available in stock.`);
          return state;
        }
        state.cartItems[product].cartQuantity += requestedQuantity;
      } else {
        if (requestedQuantity > stockLimit) {
          notifyerror(`Cannot add more. Only ${stockLimit} available in stock.`);
          return state;
        }
        const tempProduct = { ...action.payload.product, cartQuantity: requestedQuantity };

        state.cartItems.push(tempProduct);

      }
      notifySuccess("Product add success!")    //  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const cartQuantity = Number(cartItem?.cartQuantity) || 0;
          const itemTotal = getCartItemPrice(cartItem) * cartQuantity;

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
      state.cartTaxAmount = parseFloat((total * 0.05).toFixed(2));
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
