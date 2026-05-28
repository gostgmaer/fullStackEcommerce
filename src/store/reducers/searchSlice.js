import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductServices from "@/helper/network/services/ProductServices";

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async ({ path, value }) => {
    const query = path === "query"
      ? { search: value }
      : { category: value };
    const response = await ProductServices.getAllProducts(query);
    return response?.results || [];
  }
);

const initialState = {
  value: null,
  path: null,
  product: [],
  isLoading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchAction: (state, action) => {
      state.path = action.payload.path;
      state.value = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.product = [];
        state.isLoading = false;
      });
  },
});

export const { searchAction } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
