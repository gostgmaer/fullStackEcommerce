import SettingServices from "@/helper/network/services/SettingServices";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch products with a search query
export const fetchSetting = createAsyncThunk(
  "settting/fetSetting",
  async (query, { rejectWithValue }) => {
    try {
      const response = await SettingServices.getGlobalSetting("e-commerce");
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    setting: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    // setQuery: (state, action) => {
    //   state.query = action.payload; // Set the query locally
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSetting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSetting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.setting = action.payload;
      })
      .addCase(fetchSetting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
// export const { setQuery } = settingSlice.actions;
export const settingReducer = settingSlice.reducer;
