import wishlistServices from '@/helper/network/services/WishlistService';
import { notifySuccess, notifywarning } from '@/utils/notify/notice';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunks for async actions
export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async (header, { rejectWithValue }) => {
    try {
        const response = await wishlistServices.fetchWishlist(header);
        return response.result;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async (params, { rejectWithValue }) => {

    
    try {
        const response = await wishlistServices.addtowishlist({product:params["id"]},params?.["token"]);
        notifySuccess(response.message)
        return response.result; // Backend returns updated wishlist
      
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const removeFromWishlist = createAsyncThunk('wishlist/removeFromWishlist', async (params, { rejectWithValue }) => {

 
    
    try {
        const response = await wishlistServices.removeFromwishlistItem({id:params["id"]}, params["token"]);
        notifywarning(response.message)
        return response.result; // Backend returns updated wishlist
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Initial state
const initialState = {
    wishlist: [],
    status: 'idle',
    error: null,
};

// Wishlist slice
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        clearWishlist(state) {
            state.wishlist = [];
        },
    },
    extraReducers: (builder) => {
        // Handle fetchWishlist
        builder
            .addCase(fetchWishlist.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWishlist.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.wishlist = action.payload;
            })
            .addCase(fetchWishlist.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Handle addToWishlist
        builder
            .addCase(addToWishlist.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.wishlist = action.payload; // Update state with the returned wishlist
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Handle removeFromWishlist
        builder
            .addCase(removeFromWishlist.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeFromWishlist.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.wishlist = action.payload; // Update state with the returned wishlist
            })
            .addCase(removeFromWishlist.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { clearWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
