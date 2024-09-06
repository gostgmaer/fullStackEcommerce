import ProductServices from '@/helper/network/services/ProductServices';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch products with a search query
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (query, { rejectWithValue }) => {
    try {
      const response = await ProductServices.getAllProducts(query);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Optional: Add more reducer functions if needed for local query handling
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productReducer = productSlice.reducer;
